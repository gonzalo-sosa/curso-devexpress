import React from "react";
import "./chart.scss";
import ClientSideDataProcessing from "./data-binding/client-side-data-processing";
import DynamicSeriesDataSource from "./data-binding/dynamic-series-data-source";
import JsonData from "./data-binding/json-data";
import LoadDataOnDemand from "./data-binding/load-data-on-demand";
import ServerSideDataProcessing from "./data-binding/server-side-data-processing";
import SignalrService from "./data-binding/signalr-service";
import SimpleArray from "./data-binding/simple-array";
import Overview from "./overview";
import Section from "src/components/section";

export default function Chart() {
  return (
    <>
      <h2>Chart</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Section title="Overview">
            <Overview />
          </Section>
          <Section title="Data Binding">
            <div>
              <h4>Simple Array</h4>
              <SimpleArray />
            </div>
            <div>
              <h4>JSON Data</h4>
              <JsonData />
            </div>
            <div>
              <h4>Client-side Data Processing</h4>
              <ClientSideDataProcessing />
            </div>
            <div>
              <h4>Server-side Data Processing</h4>
              <ServerSideDataProcessing />
            </div>
            <div>
              <h4>Dynamic Series from the DataSource</h4>
              <DynamicSeriesDataSource />
            </div>
            <div>
              <h4>SignalR Service</h4>
              <SignalrService />
            </div>
            <div>
              <h4>Load Data On Demand</h4>
              <LoadDataOnDemand />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
