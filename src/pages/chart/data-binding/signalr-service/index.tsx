import { HttpTransportType, HubConnectionBuilder } from "@aspnet/signalr";
import Chart, {
  ArgumentAxis,
  ValueAxis,
  Aggregation,
  Legend,
  Series,
  ScrollBar,
  ZoomAndPan,
  LoadingIndicator,
  Pane,
  Tooltip,
  Crosshair,
  Margin,
  HorizontalLine,
  type IAggregationProps,
  type ChartRef,
} from "devextreme-react/chart";
import type { VisualRange } from "devextreme-react/common/charts";
import CustomStore from "devextreme/data/custom_store";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TooltipTemplate from "./tooltip-template";

const minVisualRangeLength = { minutes: 10 };
const defaultVisualRange: VisualRange = { length: "hour" };

export default () => {
  const [dataSource, setDataSource] = useState(null);
  const chartRef = useRef<ChartRef>(null);

  const customizePoint = useCallback(
    (arg: { seriesName: string; argument: any }) => {
      if (!chartRef.current) return;

      if (arg.seriesName === "Volume") {
        const point = chartRef.current
          .instance()
          .getAllSeries()[0]
          .getPointsByArg(arg.argument)[0].data;
        if (point && point.close >= point.open) {
          return { color: "#1db2f5" };
        }
      }
      return null;
    },
    []
  );

  const calculateCandle = useCallback<IAggregationProps["calculate"]>((e) => {
    if (!e.data) return;

    const prices = e.data.map((d) => d.price);
    if (prices.length) {
      return {
        date: new Date(
          (e.intervalStart.valueOf() + e.intervalEnd.valueOf()) / 2
        ),
        open: prices[0],
        high: Math.max.apply(null, prices),
        low: Math.min.apply(null, prices),
        close: prices[prices.length - 1],
      };
    }
    return null;
  }, []);

  useEffect(() => {
    const hubConnection = new HubConnectionBuilder()
      .withUrl("https://js.devexpress.com/Demos/NetCore/stockTickDataHub", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    const store = new CustomStore({
      load: () => hubConnection.invoke("getAllData"),
      key: "date",
    });

    hubConnection.start().then(() => {
      hubConnection.on("updateStockPrice", (data) => {
        store.push([{ type: "insert", key: data.date, data }]);
      });
      setDataSource(store);
    });
  }, []);

  return (
    <div>
      {customizePoint && (
        <Chart
          id="chart"
          ref={chartRef}
          dataSource={dataSource}
          title="Stock Price"
          customizePoint={customizePoint}
          style={{
            height: "440px",
          }}
        >
          <Margin right={30} />
          <Series pane="Price" argumentField="date" type="candlestick">
            <Aggregation
              enabled={true}
              method="custom"
              calculate={calculateCandle}
            />
          </Series>
          <Series
            pane="Volume"
            name="Volume"
            argumentField="date"
            valueField="volume"
            color="red"
            type="bar"
          >
            <Aggregation enabled={true} method="sum" />
          </Series>
          <Pane name="Price" />
          <Pane name="Volume" height={80} />
          <Legend visible={false} />
          <ArgumentAxis
            argumentType="datetime"
            minVisualRangeLength={minVisualRangeLength}
            defaultVisualRange={defaultVisualRange}
          />
          <ValueAxis placeholderSize={50} />
          <ZoomAndPan argumentAxis="both" />
          <ScrollBar visible={true} />
          <LoadingIndicator enabled={true} />
          <Tooltip
            enabled={true}
            shared={true}
            argumentFormat="shortDateShortTime"
            contentRender={TooltipTemplate}
          />
          <Crosshair enabled={true}>
            <HorizontalLine visible={false} />
          </Crosshair>
        </Chart>
      )}
    </div>
  );
};
