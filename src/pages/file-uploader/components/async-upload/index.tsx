import CheckBox, { type CheckBoxTypes } from "devextreme-react/check-box";
import FileUploader, {
  type FileUploaderTypes,
} from "devextreme-react/file-uploader";
import SelectBox, { type SelectBoxTypes } from "devextreme-react/select-box";
import { useCallback, useState } from "react";
import styles from "./async-upload.module.css";

const uploadModes = ["instantly", "useButtons"];
const fileTypeLabel = { "aria-label": "File Type" };
const uploadModeLabel = { "aria-label": "Mode" };
const fileTypesSource = [
  { name: "All types", value: "*" },
  { name: "Images", value: "image/*" },
  { name: "Videos", value: "video/*" },
];

export default function AsyncUpload() {
  const [multiple, setMultiple] = useState(false);
  const [uploadMode, setUploadMode] =
    useState<FileUploaderTypes.Properties["uploadMode"]>("instantly");
  const [accept, setAccept] = useState("*");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onSelectedFilesChanged = useCallback(
    (e: FileUploaderTypes.ValueChangedEvent) => {
      if (e.value) setSelectedFiles(e.value);
    },
    []
  );

  const onAcceptChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent) => {
    setAccept(e.value);
  }, []);

  const onUploadModeChanged = useCallback(
    (e: SelectBoxTypes.ValueChangedEvent) => {
      setUploadMode(e.value);
    },
    []
  );

  const onMultipleChanged = useCallback(
    (e: CheckBoxTypes.ValueChangedEvent) => {
      setMultiple(e.value);
    },
    []
  );

  return (
    <div>
      <div className={styles.widgetContainer}>
        <FileUploader
          multiple={multiple}
          accept={accept}
          uploadMode={uploadMode}
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          onValueChanged={onSelectedFilesChanged}
        />
        <div
          className={styles.content}
          style={{ display: selectedFiles.length > 0 ? "block" : "none" }}
        >
          <div>
            <h4>Selected Files</h4>
            {selectedFiles.map((file, i) => (
              <div className={styles.selectedItem} key={`${i}-${file.name}`}>
                <span>
                  {`Name: ${file.name}`}
                  <br />
                </span>
                <span>
                  {`Size ${file.size}`}
                  <br />
                </span>
                <span>
                  {`Type ${file.type}`}
                  <br />
                </span>
                {/* <span>{`Last Modified Date: ${file.lastModifiedDate}`}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.caption}>Options</div>
        <div className={styles.option}>
          <span>File types</span>
          <SelectBox
            dataSource={fileTypesSource}
            inputAttr={fileTypeLabel}
            valueExpr="value"
            displayExpr="name"
            defaultValue="*"
            onValueChanged={onAcceptChanged}
          />
        </div>
        <div className={styles.option}>
          <span>Upload mode</span>
          <SelectBox
            items={uploadModes}
            defaultValue="instantly"
            inputAttr={uploadModeLabel}
            onValueChanged={onUploadModeChanged}
          />
        </div>
        <div className={styles.option}>
          <CheckBox
            text="Allow multiple files selection"
            onValueChanged={onMultipleChanged}
          />
        </div>
      </div>
    </div>
  );
}
