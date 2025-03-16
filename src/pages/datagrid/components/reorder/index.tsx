import { Column, DataGrid } from "devextreme-react/data-grid";
import { employees } from "../employees";

export default () => (
	<DataGrid
		dataSource={employees}
		keyExpr="EmployeeID"
		allowColumnReordering={true}
	>
		<Column dataField="FullName"></Column>
		<Column dataField="Position"></Column>
		<Column dataField="BirthDate" dataType="date"></Column>
		<Column dataField="HireDate" dataType="date"></Column>
		<Column dataField="City" />
		<Column dataField="Country"></Column>
		<Column dataField="Address" />
		<Column dataField="HomePhone" />
		<Column dataField="PostalCode" />
	</DataGrid>
);
