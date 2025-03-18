import { Column, DataGrid, GroupPanel } from "devextreme-react/data-grid";
import { employees } from "../employees";

export default () => (
	<DataGrid
		dataSource={employees}
		keyExpr="EmployeeID"
		allowColumnReordering={true}
	>
		<Column dataField="FullName" />
		<Column dataField="Position" groupIndex={1} />
		<Column dataField="BirthDate" dataType="date" />
		<Column dataField="HireDate" dataType="date" />
		<Column dataField="City" />
		<Column dataField="Address" />
		<Column dataField="HomePhone" />
		<Column dataField="PostalCode" />
		<Column dataField="Country" groupIndex={0} />
		<GroupPanel visible={true} />
	</DataGrid>
);
