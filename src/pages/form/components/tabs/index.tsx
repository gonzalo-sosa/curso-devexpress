import "devextreme/dist/css/dx.light.css";

import {
	Form,
	GroupItem,
	SimpleItem,
	Tab,
	TabPanelOptions,
	TabbedItem,
} from "devextreme-react/form";

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
	<Form formData={employee} colCount={2}>
		<GroupItem caption="Employee">
			<SimpleItem dataField="name" />
			<SimpleItem dataField="position" />
			<SimpleItem dataField="hireDate" />
			<SimpleItem dataField="officeNumber" />
		</GroupItem>
		<GroupItem caption="Personal Information">
			<TabbedItem>
				<TabPanelOptions height={260} />
				<Tab title="Contacts">
					<SimpleItem dataField="phone" />
					<SimpleItem dataField="skype" />
					<SimpleItem dataField="email" />
				</Tab>
				<Tab title="Note">
					<SimpleItem dataField="notes" />
				</Tab>
			</TabbedItem>
		</GroupItem>
	</Form>
);
