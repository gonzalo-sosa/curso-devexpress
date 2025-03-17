import Chart, {
	Legend,
	SeriesTemplate,
	type ISeriesTemplateProps,
	Title,
	Subtitle,
	CommonSeriesSettings,
	Export,
} from "devextreme-react/chart";
import React, { useId } from "react";
import { dataSource } from "./data";

const customizeSeries: ISeriesTemplateProps["customizeSeries"] = (
	valueFromNameField: number,
) =>
	valueFromNameField === 2009
		? { type: "line", label: { visible: true }, color: "#ff3f7a" }
		: {};

export default function DynamicSeriesDataProcessing() {
	const id = useId();
	return (
		<Chart
			id={`chart-${id}`}
			palette="Violet"
			dataSource={dataSource}
			style={{ height: "440px", width: "100%" }}
		>
			<SeriesTemplate nameField="year" customizeSeries={customizeSeries} />
			<CommonSeriesSettings
				argumentField="country"
				valueField="oil"
				type="bar"
			/>
			<Title text="Oil Production">
				<Subtitle text="(in millions tonnes)" />
			</Title>
			<Legend verticalAlignment="bottom" horizontalAlignment="center" />
			<Export enabled={true} />
		</Chart>
	);
}
