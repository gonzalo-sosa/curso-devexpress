import DataGrid, { Column } from "devextreme-react/data-grid";
import { customers } from "./data";

const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

export default function SimpleArray() {
  return (
    <DataGrid
      dataSource={customers}
      keyExpr="ID"
      defaultColumns={columns}
      showBorders={true}
    >
      {columns.map((column, index) => (
        <Column dataField={column} key={`${column}-${index}`} />
      ))}
    </DataGrid>
  );
}
