import "devextreme/dist/css/dx.light.css";

import { Form, SimpleItem } from "devextreme-react/form";

const employee = {
	name: "John Heart",
	officeNumber: 901,
	hireDate: new Date(2012, 4, 13),
};

const hireDateOptions = {
	disabled: true,
};
export default function Items() {
	return (
		<Form formData={employee}>
			<SimpleItem dataField="name" />
			<SimpleItem dataField="officeNumber" />
			<SimpleItem dataField="hireDate" editorOptions={hireDateOptions} />
		</Form>
	);
}
