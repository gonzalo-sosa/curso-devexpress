import { FileUploader } from "devextreme-react";

const headers = {
	YourHeaderName: "YourHeaderValue",
};

export default function Request() {
	return <FileUploader uploadHeaders={headers} />;
}
