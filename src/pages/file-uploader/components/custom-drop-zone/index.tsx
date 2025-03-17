import FileUploader, {
	type FileUploaderTypes,
} from "devextreme-react/file-uploader";
import ProgressBar from "devextreme-react/progress-bar";
import { useCallback, useState } from "react";
import styles from "./custom-drop-zone.module.css";

const allowedFileExtensions = [".jpg", ".jpeg", ".gif", ".png"];

export default function CustomDropZone() {
	const [isDropZoneActive, setIsDropZoneActive] = useState(false);
	const [imageSource, setImageSource] = useState<string>("");
	const [textVisible, setTextVisible] = useState(true);
	const [progressVisible, setProgressVisible] = useState(false);
	const [progressValue, setProgressValue] = useState(0);

	const onDropZoneEnter = useCallback(
		({
			component,
			dropZoneElement,
			event,
		}: FileUploaderTypes.DropZoneEnterEvent) => {
			if (dropZoneElement.id === "dropzone-external") {
				const items = event?.originalEvent.dataTransfer.items;

				const currentAllowedFileExtensions = component.option(
					"allowedFileExtensions",
				);
				const draggedFileExtension = `.${items[0].type.replace(
					/^image\//,
					"",
				)}`;

				const isSingleFileDragged = items.length === 1;
				const isValidFileExtension =
					currentAllowedFileExtensions?.includes(draggedFileExtension);

				if (isSingleFileDragged && isValidFileExtension) {
					setIsDropZoneActive(true);
				}
			}
		},
		[],
	);

	const onDropZoneLeave = useCallback(
		(e: FileUploaderTypes.DropZoneLeaveEvent) => {
			if (e.dropZoneElement.id === "dropzone-external") {
				setIsDropZoneActive(false);
			}
		},
		[],
	);

	const onUploaded = useCallback((e: FileUploaderTypes.UploadedEvent) => {
		const { file } = e;
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setIsDropZoneActive(false);
			setImageSource(fileReader.result as string);
		};
		fileReader.readAsDataURL(file);
		setTextVisible(false);
		setProgressVisible(false);
		setProgressValue(0);
	}, []);

	const onProgress = useCallback(
		(e: { bytesLoaded: number; bytesTotal: number }) => {
			setProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
		},
		[],
	);

	const onUploadStarted = useCallback(() => {
		setImageSource("");
		setProgressVisible(true);
	}, []);

	return (
		<div className={styles["widget-container"] + styles["flex-box"]}>
			<span>Profile Picture</span>
			<div
				id={styles["dropzone-external"]}
				className={`${styles["flex-box"]} ${
					isDropZoneActive ? styles["dropzone-active"] : ""
				}`}
			>
				{imageSource && (
					<img id={styles["dropzone-image"]} src={imageSource} alt="" />
				)}
				{textVisible && (
					<div id={styles["dropzone-text"]} className={styles["flex-box"]}>
						<span>Drag & Drop the desired file</span>
						<span>…or click to browse for a file instead.</span>
					</div>
				)}
				<ProgressBar
					id={styles["upload-progress"]}
					min={0}
					max={100}
					width="30%"
					showStatus={false}
					visible={progressVisible}
					value={progressValue}
				/>
			</div>
			<FileUploader
				id={styles["file-uploader"]}
				dialogTrigger="#dropzone-external"
				dropZone="#dropzone-external"
				multiple={false}
				allowedFileExtensions={allowedFileExtensions}
				uploadMode="instantly"
				uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
				visible={false}
				onDropZoneEnter={onDropZoneEnter}
				onDropZoneLeave={onDropZoneLeave}
				onUploaded={onUploaded}
				onProgress={onProgress}
				onUploadStarted={onUploadStarted}
			/>
		</div>
	);
}
