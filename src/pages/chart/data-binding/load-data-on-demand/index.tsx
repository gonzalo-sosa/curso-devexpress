import {
	Animation,
	ArgumentAxis,
	Chart,
	type ChartTypes,
	Font,
	Label,
	Legend,
	LoadingIndicator,
	ScrollBar,
	Series,
	Title,
	ValueAxis,
	ZoomAndPan,
} from "devextreme-react/chart";
import DataSource from "devextreme/data/data_source";
import { useId, useState } from "react";

const HALFDAY = 43200000;
let packetsLock = 0;

const chartDataSource = new DataSource({
	store: [],
	sort: "date",
	paginate: false,
});

const wholeRange = {
	startValue: new Date(2017, 0, 1),
	endValue: new Date(2017, 11, 31),
};

export default function LoadDataOnDemand() {
	const id = useId();

	const [visualRange, setVisualRange] = useState({
		startValue: new Date(2017, 3, 1),
		endValue: new Date(2017, 3, 15),
	});

	const handleChange = (e: ChartTypes.OptionChangedEvent) => {
		if (e.fullName === "argumentAxis.visualRange") {
			const stateStart = visualRange.startValue;
			const currentStart = e.value.startValue;
			if (stateStart.valueOf() !== currentStart.valueOf()) {
				setVisualRange(e.value);
			}
			onVisualRangeChanged(e.value, e.component);
		}
	};

	return (
		<Chart
			id={`chart-${id}`}
			title="Temperature in Toronto (2017)"
			dataSource={chartDataSource}
			onOptionChanged={handleChange}
			style={{ height: "440px" }}
		>
			<ZoomAndPan argumentAxis="pan" />
			<ScrollBar visible={true} />
			<ArgumentAxis
				argumentType="datetime"
				visualRangeUpdateMode="keep"
				visualRange={visualRange}
				wholeRange={wholeRange}
			/>
			<ValueAxis name="temperature" allowDecimals={false}>
				<Title text="Temperature, &deg;C">
					<Font color="#ff950c" />
				</Title>
				<Label>
					<Font color="#ff950c" />
				</Label>
			</ValueAxis>
			<Series
				color="#ff950c"
				type="rangearea"
				argumentField="date"
				rangeValue1Field="minTemp"
				rangeValue2Field="maxTemp"
				name="Temperature range"
			/>
			<Animation enabled={false} />
			<LoadingIndicator backgroundColor="none">
				<Font size={14} />
			</LoadingIndicator>
			<Legend visible={false} />
		</Chart>
	);
}

const uploadDataByVisualRange = (visualRange, component) => {
	const dataSource = component.getDataSource();
	const storage = dataSource.items();
	const ajaxArgs = {
		startVisible: getDateString(visualRange.startValue),
		endVisible: getDateString(visualRange.endValue),
		startBound: getDateString(storage.length ? storage[0].date : null),
		endBound: getDateString(
			storage.length ? storage[storage.length - 1].date : null,
		),
	};

	if (
		ajaxArgs.startVisible !== ajaxArgs.startBound &&
		ajaxArgs.endVisible !== ajaxArgs.endBound &&
		!packetsLock
	) {
		packetsLock += 1;
		component.showLoadingIndicator();

		getDataFrame(ajaxArgs)
			.then((dataFrame) => {
				packetsLock -= 1;

				const componentStorage = dataSource.store();

				dataFrame
					.map((i: { Date: string; MinTemp: number; MaxTemp: number }) => ({
						date: new Date(i.Date),
						minTemp: i.MinTemp,
						maxTemp: i.MaxTemp,
					}))
					.forEach((item: { date: Date; minTemp: number; maxTemp: number }) =>
						componentStorage.insert(item),
					);

				dataSource.reload();

				onVisualRangeChanged(visualRange, component);
			})
			.catch(() => {
				packetsLock -= 1;
				dataSource.reload();
			});
	}
};

const onVisualRangeChanged = (visualRange, component) => {
	const items = component.getDataSource().items();
	if (
		!items.length ||
		items[0].date - visualRange.startValue.getTime() >= HALFDAY ||
		visualRange.endValue.getTime() - items[items.length - 1].date >= HALFDAY
	) {
		uploadDataByVisualRange(visualRange, component);
	}
};

function getDataFrame(args: {
	startVisible: string;
	endVisible: string;
	startBound: string;
	endBound: string;
}) {
	let params = "?";

	params += `startVisible=${args.startVisible}
    &endVisible=${args.endVisible}
    &startBound=${args.startBound}
    &endBound=${args.endBound}`;

	return fetch(
		`https://js.devexpress.com/Demos/WidgetsGallery/data/temperatureData${params}`,
	).then((response) => response.json());
}

function getDateString(dateTime: Date) {
	return dateTime ? dateTime.toLocaleDateString("en-US") : "";
}
