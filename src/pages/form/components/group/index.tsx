import "devextreme/dist/css/dx.light.css";

import { Form, GroupItem, SimpleItem } from "devextreme-react/form";

const employee = {
	name: "John Heart",
	position: "CEO",
	hireDate: new Date(2012, 4, 13),
	officeNumber: 901,
	phone: "+1(213) 555-9392",
	skype: "jheart_DX_skype",
	email: "jheart@dx-email.com",
};

export default function Group() {
	return (
		<Form formData={employee} colCount={2}>
			<GroupItem caption="Personal Information">
				<SimpleItem dataField="name" />
				<SimpleItem dataField="position" />
				<SimpleItem dataField="hireDate" />
				<SimpleItem dataField="officeNumber" />
			</GroupItem>
			<GroupItem caption="Contacts">
				<SimpleItem dataField="phone" />
				<SimpleItem dataField="skype" />
				<SimpleItem dataField="email" />
			</GroupItem>
		</Form>
	);
}
