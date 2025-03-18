import { Column, DataGrid } from "devextreme-react/data-grid";
import { employees } from "../employees";

export default () => (
	<DataGrid
		dataSource={employees}
		keyExpr="EmployeeID"
		columnAutoWidth={true}
		allowColumnReordering={true}
	>
		<Column dataField="FullName" />
		<Column dataField="Position" />
		<Column dataField="BirthDate" dataType="date" width={100} />
		<Column dataField="HireDate" dataType="date" width={100} />
		<Column dataField="City" />
		<Column dataField="Country" />
		<Column dataField="Address" />
		<Column dataField="HomePhone" />
		<Column dataField="PostalCode" />
	</DataGrid>
);
