import "devextreme/dist/css/dx.light.css";

import { Column, DataGrid, Export } from "devextreme-react/data-grid";

import { exportDataGrid } from "devextreme/excel_exporter";
import { exportDataGrid as exportDataGridToPdf } from "devextreme/pdf_exporter";
import type { ExportingEvent } from "devextreme/ui/data_grid";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { jsPDF } from "jspdf";
import { employees } from "../employees";
// ...

const exportFormats = ["xlsx", "pdf"];

function exportGrid(e: ExportingEvent) {
	if (e.format === "xlsx") {
		const workbook = new Workbook();
		const worksheet = workbook.addWorksheet("Main sheet");
		exportDataGrid({
			worksheet: worksheet,
			component: e.component,
		}).then(() => {
			workbook.xlsx.writeBuffer().then((buffer) => {
				saveAs(
					new Blob([buffer], { type: "application/octet-stream" }),
					"DataGrid.xlsx",
				);
			});
		});
	} else if (e.format === "pdf") {
		const doc = new jsPDF();
		exportDataGridToPdf({
			jsPDFDocument: doc,
			component: e.component,
		}).then(() => {
			doc.save("DataGrid.pdf");
		});
	}
}

export default () => (
	<DataGrid
		dataSource={employees}
		keyExpr="EmployeeID"
		allowColumnReordering={true}
		onExporting={exportGrid}
	>
		<Column dataField="FullName" />
		<Column dataField="Position" />
		<Column dataField="BirthDate" dataType="date" />
		<Column dataField="HireDate" dataType="date" />
		<Column dataField="City" />
		<Column dataField="Country" />
		<Column dataField="Address" />
		<Column dataField="HomePhone" />
		<Column dataField="PostalCode" />
		<Export enabled={true} formats={exportFormats} />
	</DataGrid>
);
