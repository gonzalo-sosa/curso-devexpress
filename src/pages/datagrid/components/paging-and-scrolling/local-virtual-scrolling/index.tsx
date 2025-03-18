import DataGrid, {
	Scrolling,
	Sorting,
	LoadPanel,
	type DataGridTypes,
} from "devextreme-react/data-grid";
import { useCallback, useState } from "react";
import { generateData } from "./data";

const dataSource = generateData(100000);

const customizeColumns = (columns: DataGridTypes.Column[]) => {
	columns[0].width = 70;
};
export default function LocalVirtualScrolling() {
	const [loadPanelEnabled, setLoadPanelEnabled] = useState(true);

	const onContentReady = useCallback(() => {
		setLoadPanelEnabled(false);
	}, []);

	return (
		<DataGrid
			height={440}
			dataSource={dataSource}
			keyExpr="id"
			showBorders={true}
			customizeColumns={customizeColumns}
			onContentReady={onContentReady}
		>
			<Sorting mode="none" />
			<Scrolling mode="virtual" />
			<LoadPanel enabled={loadPanelEnabled} />
		</DataGrid>
	);
}
