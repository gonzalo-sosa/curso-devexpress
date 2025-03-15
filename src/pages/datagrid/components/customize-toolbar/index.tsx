import { Button } from "devextreme-react/button";
import {
	Column,
	DataGrid,
	Grouping,
	Item,
	Toolbar,
} from "devextreme-react/data-grid";
import { useState } from "react";
import { employees } from "../employees";

export default () => {
	const [expanded, setExpanded] = useState(true);

	return (
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
			<Grouping autoExpandAll={expanded} />
			<Toolbar>
				<Item name="groupPanel" />
				<Item location="after">
					<Button
						text={expanded ? "Collapse All" : "Expand All"}
						width={136}
						onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
					/>
				</Item>
				<Item name="addRowButton" showText="always" />
				<Item name="exportButton" />
				<Item name="columnChooserButton" />
				<Item name="searchPanel" />
			</Toolbar>
		</DataGrid>
	);
};
