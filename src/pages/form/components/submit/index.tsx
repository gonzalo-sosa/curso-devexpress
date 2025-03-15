import {
	ButtonItem,
	EmailRule,
	Form,
	GroupItem,
	NumericRule,
	SimpleItem,
} from "devextreme-react/form";

const employee = {
	name: "John Heart",
	officeNumber: 901,
	email: "jheart@dx-email.com",
};

const submitButtonOptions = {
	text: "Submit the Form",
	useSubmitBehavior: true,
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	setTimeout(() => {
		alert("Submitted");
	}, 1000);

	e.preventDefault();
};

export default () => (
	<form action={"/"} onSubmit={handleSubmit}>
		<Form formData={employee} colCount={2}>
			<GroupItem caption="Personal Information" colCount={2}>
				<SimpleItem dataField="name" isRequired={true} />
				<SimpleItem dataField="officeNumber">
					<NumericRule />
				</SimpleItem>
				<SimpleItem dataField="email">
					<EmailRule />
				</SimpleItem>
			</GroupItem>
			<ButtonItem buttonOptions={submitButtonOptions} />
		</Form>
	</form>
);
