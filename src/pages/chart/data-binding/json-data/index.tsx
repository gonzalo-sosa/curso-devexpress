import Chart, {
	ArgumentAxis,
	Legend,
	Series,
	ValueAxis,
	Label,
	Export,
	Tick,
} from "devextreme-react/chart";

const customizeText = (e: {
	value: Date | number | string;
	valueText: string;
}) => `Day ${e.value}`;

export default function JsonData() {
	return (
		<Chart
			title="Daily Sales"
			dataSource={"data/simpleJSON.json"}
			rotated={true}
			id="chart"
		>
			<ArgumentAxis>
				<Label customizeText={customizeText} />
			</ArgumentAxis>

			<ValueAxis>
				<Tick visible={false} />
				<Label visible={false} />
			</ValueAxis>

			<Series valueField="sales" argumentField="day" type="bar" color="#79cac4">
				<Label visible={true} backgroundColor="#c18e92" />
			</Series>

			<Legend visible={false} />

			<Export enabled={true} />
		</Chart>
	);
}
