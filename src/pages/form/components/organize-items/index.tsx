import "devextreme/dist/css/dx.light.css";

import { Form, SimpleItem } from "devextreme-react/form";

const employee = {
	name: "John Heart",
	position: "CEO",
	hireDate: new Date(2012, 4, 13),
	officeNumber: 901,
	notes: "John has been in the Audio/Video industry since 1990.",
};

export default () => (
	<Form formData={employee} colCount={2}>
		<SimpleItem dataField="name" />
		<SimpleItem dataField="position" />
		<SimpleItem dataField="hireDate" />
		<SimpleItem dataField="officeNumber" />
		<SimpleItem dataField="notes" colSpan={2} />
	</Form>
);
