import { useCallback, useState } from "react";

import "devextreme/dist/css/dx.light.css";

import FileUploader from "devextreme-react/file-uploader";
import type {
	FileUploadMode,
	ValueChangedEvent,
} from "devextreme/ui/file_uploader";

export default () => {
	const [multiple, setMultiple] = useState(false);
	const [accept, setAccept] = useState("*");
	const [uploadMode, setUploadMode] = useState<FileUploadMode>("instantly");
	const [uploadUrl, setUploadUrl] = useState(
		"https://js.devexpress.com/Demos/NetCore/FileUploader/Upload",
	);

	const onSelectedFilesChanged = useCallback((e: ValueChangedEvent) => {
		setUploadUrl(updateQueryStringParameter("fileGuid", uuidv4()));
	}, []);

	const updateQueryStringParameter = useCallback(
		(key: string, value: string) => {
			var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
			var separator = uploadUrl.indexOf("?") !== -1 ? "&" : "?";
			if (uploadUrl.match(re)) {
				return uploadUrl.replace(re, "$1" + key + "=" + value + "$2");
			} else {
				return uploadUrl + separator + key + "=" + value;
			}
		},
		[],
	);

	return (
		<div>
			<div className="widget-container">
				<FileUploader
					multiple={multiple}
					accept={accept}
					uploadMode={uploadMode}
					uploadUrl={uploadUrl}
					onValueChanged={onSelectedFilesChanged}
				/>
			</div>
		</div>
	);
};

function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		var r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
