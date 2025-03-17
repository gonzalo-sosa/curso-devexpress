import DataGrid from "devextreme-react/data-grid";

const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

export default function JsonData() {
  return (
    <DataGrid
      dataSource="data/customers.json"
      defaultColumns={columns}
      showBorders={true}
    />
  );
}
