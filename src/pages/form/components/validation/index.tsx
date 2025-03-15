import "devextreme/dist/css/dx.light.css";

import {
	ButtonItem,
	EmailRule,
	Form,
	NumericRule,
	SimpleItem,
} from "devextreme-react/form";

const employee = {
	name: "John Heart",
	officeNumber: 901,
	email: "jheart@dx-email.com",
};

export default () => (
	<Form formData={employee} colCount={2}>
		<SimpleItem dataField="name" isRequired={true} />
		<SimpleItem dataField="officeNumber">
			<NumericRule />
		</SimpleItem>
		<SimpleItem dataField="email">
			<EmailRule />
		</SimpleItem>
	</Form>
);
