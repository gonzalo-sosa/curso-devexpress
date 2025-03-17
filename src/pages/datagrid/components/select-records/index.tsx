import {
  Column,
  DataGrid,
  FilterRow,
  SearchPanel,
  Selection,
} from "devextreme-react/data-grid";
import { useCallback, useState } from "react";
import { employees } from "../employees";

function SelectedEmployee(props: { employee: { FullName: string } }) {
  if (props.employee) {
    return (
      <p id="selected-employee">Selected employee: {props.employee.FullName}</p>
    );
  }
  return null;
}

export default () => {
  const [selectedEmployee, setSelectedEmployee] = useState<{
    FullName: string;
  }>({ FullName: "" });

  const selectEmployee = useCallback((e: any) => {
    e.component
      .byKey(e.currentSelectedRowKeys[0])
      .done((employee: { FullName: string }) => {
        setSelectedEmployee(employee);
      });
  }, []);

  return (
    <>
      <DataGrid
        dataSource={employees}
        keyExpr="EmployeeID"
        allowColumnReordering={true}
        onSelectionChanged={selectEmployee}
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
        <Selection mode="single" />
      </DataGrid>
      <SelectedEmployee employee={selectedEmployee} />
    </>
  );
};
