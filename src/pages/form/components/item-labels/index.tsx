import "devextreme/dist/css/dx.light.css";

import { Form, Label, SimpleItem } from "devextreme-react/form";

const employee = {
	name: "John Heart",
	position: "CEO",
	hireDate: new Date(2012, 4, 13),
	officeNumber: 901,
	phone: "+1(213) 555-9392",
	skype: "jheart_DX_skype",
	email: "jheart@dx-email.com",
	notes: "John has been in the Audio/Video industry since 1990.",
};

export default () => (
	<Form formData={employee} colCount={2} labelLocation="top">
		<SimpleItem dataField="name" />
		<SimpleItem dataField="position" />
		<SimpleItem dataField="hireDate" />
		<SimpleItem dataField="officeNumber" />
		<SimpleItem dataField="notes" colSpan={2}>
			<Label alignment="center" />
		</SimpleItem>
	</Form>
);
