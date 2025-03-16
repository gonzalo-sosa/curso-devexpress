import { DataGrid } from "devextreme-react/data-grid";
import { employees } from "../employees";

export default () => (
	<DataGrid dataSource={employees} keyExpr="EmployeeID"></DataGrid>
);
