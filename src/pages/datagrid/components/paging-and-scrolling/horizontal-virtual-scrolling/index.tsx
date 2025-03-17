import DataGrid, { Scrolling, Paging } from "devextreme-react/data-grid";
import { generateData } from "./data";

const dataSource = generateData(50, 500);

export default function HorizontalVirtualScrolling() {
  return (
    <DataGrid
      height={440}
      dataSource={dataSource}
      keyExpr="field1"
      showBorders={true}
      columnWidth={100}
    >
      <Scrolling columnRenderingMode="virtual" />
      <Paging enabled={false} />
    </DataGrid>
  );
}
