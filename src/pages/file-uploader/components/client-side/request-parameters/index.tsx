import "devextreme/dist/css/dx.light.css";

import FileUploader from "devextreme-react/file-uploader";
import DxNumberBox from "devextreme-react/number-box";
import type { ValueChangedEvent as ValueChangedEventFileUploader } from "devextreme/ui/file_uploader_types";
import type { ValueChangedEvent as ValueChangedEventDxNumberBox } from "devextreme/ui/number_box_types";
import { useCallback, useState } from "react";

const employee = {
  id: 1,
  office: 901,
};

export default function RequestParameters() {
  const [uploadUrl, setUploadUrl] = useState("");

  const addIdParameter = useCallback(
    (e: ValueChangedEventFileUploader) => {
      const url = updateQueryStringParameter(uploadUrl, "id", employee.id);
      e.component.option("uploadUrl", url);

      setUploadUrl(url);
    },
    [uploadUrl]
  );

  const addOfficeParameter = useCallback((e: ValueChangedEventDxNumberBox) => {
    if (typeof e.value === "undefined") return;

    if (e.value !== e.previousValue) {
      setUploadUrl((prevUploadUrl) =>
        updateQueryStringParameter(prevUploadUrl, "office", e.value)
      );
    }
  }, []);

  return (
    <>
      <FileUploader
        name="file"
        onValueChanged={addIdParameter}
        uploadMode="instantly"
        uploadUrl="https://mydomain.com/MyUploadService"
      />
      <DxNumberBox
        value={employee.office}
        onValueChanged={addOfficeParameter}
      />
    </>
  );
}

function updateQueryStringParameter<T>(uri: string, key: string, value: T) {
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, "i");
  const separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  }
  return `${uri + separator + key}=${value}`;
}
