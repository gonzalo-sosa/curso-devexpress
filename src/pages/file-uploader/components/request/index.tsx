import { FileUploader } from "devextreme-react";

const headers = {
	YourHeaderName: "YourHeaderValue",
};

export default () => {
	return <FileUploader uploadHeaders={headers} />;
};
