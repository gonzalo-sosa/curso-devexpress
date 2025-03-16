import "devextreme/dist/css/dx.light.css";

import { FileUploader } from "devextreme-react/file-uploader";

export default () => (
	<FileUploader
		name="file"
		chunkSize={400000}
		uploadMode="useButtons"
		uploadUrl="https://mydomain.com/MyUploadService"
	/>
);
