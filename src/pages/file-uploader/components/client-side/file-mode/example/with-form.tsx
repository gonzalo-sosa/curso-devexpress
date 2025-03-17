import "devextreme/dist/css/dx.light.css";

import FileUploader from "devextreme-react/file-uploader";

const actionURL = "https://mydomain.com/MyUploadService";

export default function WithForm() {
	return (
		<form
			id="form"
			method="post"
			action={actionURL}
			encType="multipart/form-data"
		>
			<FileUploader uploadMode="useForm" />
			<input type="submit" />
		</form>
	);
}
