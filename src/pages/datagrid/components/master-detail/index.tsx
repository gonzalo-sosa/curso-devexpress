import "devextreme/dist/css/dx.light.css";

import {
	Column,
	DataGrid,
	// ...
	MasterDetail,
} from "devextreme-react/data-grid";
import { employees } from "../employees";
import "./styles.css";

function DetailSection(props: { data: any }) {
	const employee = props.data.data;
	return (
		<div>
			<img
				className="employee-photo"
				alt={employee.FullName}
				src={employee.Photo}
			/>
			<p className="employee-notes">{employee.Notes}</p>
		</div>
	);
}

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
		<MasterDetail enabled={true} component={DetailSection} />
	</DataGrid>
);
