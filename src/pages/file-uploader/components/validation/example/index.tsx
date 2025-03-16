import FileUploader from "devextreme-react/file-uploader";
import styles from "./example.module.css";

const fileExtensions = [".jpg", ".jpeg", ".gif", ".png"];

export default function ValidationExample() {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.fileUploaderBlock}>
        <FileUploader
          multiple={true}
          uploadMode="useButtons"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          allowedFileExtensions={fileExtensions}
        />
        <span className={styles.note}>
          {"Allowed file extensions: "}
          <span>.jpg, .jpeg, .gif, .png</span>.
        </span>
      </div>
      <div className={styles.fileUploaderBlock}>
        <FileUploader
          multiple={true}
          uploadMode="useButtons"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          maxFileSize={4000000}
        />
        <span className={styles.note}>
          {"Maximum file size: "}
          <span>4 MB</span>.
        </span>
      </div>
    </div>
  );
}
