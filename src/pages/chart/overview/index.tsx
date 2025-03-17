import {
	ArgumentAxis,
	Chart,
	CommonSeriesSettings,
	ConstantLine,
	Label,
	LegendTitle,
	Series,
	Tooltip,
	ValueAxis,
} from "devextreme-react/chart";
import { useId } from "react";
import { complaintsData } from "./data";

const data = complaintsData.sort((a, b) => b.count - a.count);
const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);
let cumulativeCount = 0;

const dataArray = data.map((item) => {
	cumulativeCount += item.count;
	return {
		complaint: item.complaint,
		count: item.count,
		cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
	};
});

const customizeTooltip = (pointInfo: {
	argumentText: string;
	points: any[];
}) => ({
	html: `<div><div class="tooltip-header">${pointInfo.argumentText}</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName}</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText}</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName}</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText}</span>% </div></div></div>`,
});

function customizePercentageText({ valueText }: { valueText: string }) {
	return `${valueText}%`;
}

export default function Overview() {
	const id = useId();
	return (
		<Chart
			title={"Pizza Shop Complaints"}
			dataSource={dataArray}
			palette={"Harmony Light"}
			id={`chart-${id}`}
		>
			<CommonSeriesSettings argumentField="complaint" />
			<Series
				name="Complaint frequency"
				valueField="count"
				axis="frequency"
				type="bar"
				color="#fac29a"
			/>
			<Series
				name="Cumulative percentage"
				valueField="cumulativePercentage"
				axis="percentage"
				type="spline"
				color="#6b71c3"
			/>

			<ArgumentAxis>
				<Label overlappingBehavior="stagger" />
			</ArgumentAxis>

			<ValueAxis name="frequency" position="left" tickInterval={300} />
			<ValueAxis
				name="percentage"
				position="right"
				tickInterval={20}
				showZero={true}
				valueMarginsEnabled={false}
			>
				<Label customizeText={customizePercentageText} />
				<ConstantLine value={80} width={2} color="#fc3535" dashStyle="dash">
					<Label visible={false} />
				</ConstantLine>
			</ValueAxis>

			<Tooltip
				enabled={true}
				shared={true}
				customizeTooltip={customizeTooltip}
			/>

			<LegendTitle verticalAlignment="top" horizontalAlignment="center" />
		</Chart>
	);
}
