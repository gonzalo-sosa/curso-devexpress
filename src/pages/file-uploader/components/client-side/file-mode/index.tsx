import "devextreme/dist/css/dx.light.css";

import { FileUploader } from "devextreme-react/file-uploader";

export default () => (
  <FileUploader
    uploadMode="useButtons"
    uploadUrl="https://mydomain.com/MyUploadService"
  />
);
