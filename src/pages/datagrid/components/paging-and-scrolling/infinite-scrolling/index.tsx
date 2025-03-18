import DataGrid, {
	Scrolling,
	Sorting,
	LoadPanel,
	type DataGridTypes,
} from "devextreme-react/data-grid";
import React from "react";
import { generateData } from "./data";

const dataSource = generateData(100000);

const customizeColumns = (columns: DataGridTypes.Column[]) => {
	columns[0].width = 70;
};

export default function InfiniteScrolling() {
	return (
		<DataGrid
			height={440}
			dataSource={dataSource}
			keyExpr="id"
			showBorders={true}
			customizeColumns={customizeColumns}
		>
			<Sorting mode="none" />
			<Scrolling mode="infinite" />
			<LoadPanel enabled={false} />
		</DataGrid>
	);
}
