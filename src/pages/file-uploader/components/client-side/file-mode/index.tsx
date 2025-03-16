import "devextreme/dist/css/dx.light.css";

import { FileUploader } from "devextreme-react/file-uploader";

export default function FileMode() {
  return (
    <FileUploader
      uploadMode="useButtons"
      uploadUrl="https://mydomain.com/MyUploadService"
    />
  );
}
