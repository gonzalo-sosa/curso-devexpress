import {
	Column,
	DataGrid,
	GroupItem,
	Summary,
	TotalItem,
} from "devextreme-react/data-grid";
import { employees } from "./employees";

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
		<Column dataField="Salary" dataType="number" format="currency" />
		<Summary>
			<TotalItem column="Salary" summaryType="min" valueFormat={"currency"} />
			<TotalItem column="Salary" summaryType="max" valueFormat={"currency"} />
			<TotalItem column="Salary" summaryType="avg" valueFormat={"currency"} />
			<TotalItem column="Salary" summaryType="sum" valueFormat={"currency"} />
			<TotalItem column="FullName" summaryType="count" />
			<TotalItem column="Salary" summaryType="" />
		</Summary>
	</DataGrid>
);
