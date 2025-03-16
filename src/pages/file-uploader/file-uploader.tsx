import React from "react";
import "./file-uploader.scss";
import Section from "src/components/section";
import Multiple from "./components/multiple";
import Overview from "./components/overview";
import Request from "./components/request";
import Guid from "./components/guid";
import Controlled from "./components/controlled";

export default () => (
  <React.Fragment>
    <h2>File</h2>
    <div className={"content-block"}>
      <div className={"dx-card responsive-paddings"}>
        <Section title="Overview">
          <Overview />
        </Section>
        <Section title="Multiple">
          <Multiple />
        </Section>
        <Section title="Controlled">
          <Controlled />
        </Section>
        <Section title="Request">
          <Request />
        </Section>
        <Section title="GUID">
          <Guid />
        </Section>
      </div>
    </div>
  </React.Fragment>
);
