import {
	Column,
	DataGrid,
	FilterRow,
	SearchPanel,
} from "devextreme-react/data-grid";
import { employees } from "../employees";

export default () => (
	<DataGrid
		dataSource={employees}
		keyExpr="EmployeeID"
		allowColumnReordering={true}
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
		<FilterRow visible={true} />
		<SearchPanel visible={true} />
	</DataGrid>
);
