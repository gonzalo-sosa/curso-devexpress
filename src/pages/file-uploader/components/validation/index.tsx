import "devextreme/dist/css/dx.light.css";

import FileUploader from "devextreme-react/file-uploader";

const allowedFileExtensions = [".jpeg", ".png"];

export default () => (
	<FileUploader
		allowedFileExtensions={allowedFileExtensions}
		maxFileSize={1024 * 1024}
		minFileSize={1024}
	/>
);
