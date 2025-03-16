import React from "react";
import "./datagrid.scss";
import Basic from "./components/basic";
import CustomizeToolbar from "./components/customize-toolbar";
import DisplaySummaries from "./components/display-summaries";
import EditAndValidate from "./components/edit-and-validate";
import Export from "./components/export";
import FilterAndSearch from "./components/filter-and-search";
import Fix from "./components/fix";
import Group from "./components/group";
import Hide from "./components/hide";
import MasterDetail from "./components/master-detail";
import Overview from "./components/overview";
import Reorder from "./components/reorder";
import Resize from "./components/resize";
import SelectRecords from "./components/select-records";
import Sort from "./components/sort";
import Section from "src/components/section";

export default function DataGrid() {
  return (
    <>
      <h2>Datagrid</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Section title="Overview">
            <Overview />
          </Section>
          <Section title="Reorder">
            <Reorder />
          </Section>
          <Section title="Resize Columns">
            <Resize />
          </Section>
          <Section title="Fix Columns">
            <Fix />
          </Section>
          <Section title="Hide Columns">
            <Hide />
          </Section>
          <Section title="Sort Data">
            <Sort />
          </Section>
          <Section title="Filter and Search Data">
            <FilterAndSearch />
          </Section>
          <Section title="Group Data">
            <Group />
          </Section>
          <Section title="Edit and Validate Data">
            <EditAndValidate />
          </Section>
          <Section title="Select Records">
            <SelectRecords />
          </Section>
          <Section title="Display Summaries">
            <DisplaySummaries />
          </Section>
          <Section title="Customize the Toolbar">
            <CustomizeToolbar />
          </Section>
          <Section title="Configure Master-Detail Interface">
            <MasterDetail />
          </Section>
          <Section title="Export Data">
            <Export />
          </Section>
        </div>
      </div>
    </>
  );
}
