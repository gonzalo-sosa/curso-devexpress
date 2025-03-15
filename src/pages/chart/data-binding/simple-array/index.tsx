import Chart, {
	ArgumentAxis,
	Label,
	Legend,
	Series,
} from "devextreme-react/chart";
import { useId } from "react";
import { populationData } from "./data";

export default () => {
	const id = useId();
	return (
		<Chart
			title="World Population by Decade"
			dataSource={populationData}
			id={`chart-${id}`}
			style={{ height: "440px" }}
		>
			<ArgumentAxis tickInterval={10}>
				<Label format="decimal" />
			</ArgumentAxis>

			<Series type="bar" />

			<Legend visible={false} />
		</Chart>
	);
};
