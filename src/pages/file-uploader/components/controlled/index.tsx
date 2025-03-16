import { FileUploader } from "devextreme-react/file-uploader";
import type { ValueChangedEvent } from "devextreme/ui/file_uploader";
import { useState } from "react";

export default () => {
	const [value, setValue] = useState<File[]>([]);

	const changeValue = (e: ValueChangedEvent) => {
		if (e.value) setValue(e.value);
	};

	const getSelectedFiles = () => {
		return value;
	};

	return <FileUploader value={value} onValueChanged={changeValue} />;
};
