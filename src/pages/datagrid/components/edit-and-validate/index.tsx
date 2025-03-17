import {
  Column,
  DataGrid,
  Editing,
  RequiredRule,
} from "devextreme-react/data-grid";
import { employees } from "../employees";

export default () => (
  <DataGrid
    dataSource={employees}
    keyExpr="EmployeeID"
    allowColumnReordering={true}
  >
    <Column dataField="FullName">
      <RequiredRule />
    </Column>
    <Column dataField="Position">
      <RequiredRule />
    </Column>
    <Column dataField="BirthDate">
      <RequiredRule />
    </Column>
    <Column dataField="HireDate">
      <RequiredRule />
    </Column>
    <Column dataField="Country">
      <RequiredRule />
    </Column>
    <Column dataField="City" />
    <Column dataField="Address" />
    <Column dataField="HomePhone" />
    <Column dataField="PostalCode" />
    <Editing
      mode="batch"
      allowUpdating={true}
      allowDeleting={true}
      allowAdding={true}
    />
  </DataGrid>
);
