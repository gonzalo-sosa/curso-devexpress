import "./file-uploader.scss";
import Section from "src/components/section";
import AsyncUpload from "./components/async-upload";
import ChunkUpload from "./components/client-side/chunk-upload";
import FileMode from "./components/client-side/file-mode";
import FileModeExampleWithForm from "./components/client-side/file-mode/example/with-form";
import RequestParameters from "./components/client-side/request-parameters";
import Controlled from "./components/controlled";
import Guid from "./components/guid";
import Multiple from "./components/multiple";
import Overview from "./components/overview";
import Request from "./components/request";
import Validation from "./components/validation";
import ValidationExample from "./components/validation/example";

export default function FileUploader() {
  return (
    <>
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
          <Section title="Client-side Settings">
            <div>
              <h4>File Mode</h4>
              <FileMode />
              <div>
                <h5>Example with Form</h5>
                <FileModeExampleWithForm />
              </div>
            </div>
            <div>
              <h4>Chunk Upload</h4>
              <ChunkUpload />
            </div>
            <div>
              <h4>Request parameters</h4>
              <RequestParameters />
            </div>
          </Section>
          <Section title="Server-side">
            <div />
          </Section>
          <Section title="Get GUID after uploading in chunks">
            <div />
          </Section>
          <Section title="Validation">
            <>
              <Validation />
              <div>
                <h4>Example</h4>
                <ValidationExample />
              </div>
            </>
          </Section>
          <Section title="Async Upload">
            <AsyncUpload />
          </Section>
        </div>
      </div>
    </>
  );
}
