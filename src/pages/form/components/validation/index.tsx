import "devextreme/dist/css/dx.light.css";

import {
  ButtonItem,
  EmailRule,
  Form,
  NumericRule,
  SimpleItem,
  StringLengthRule,
} from "devextreme-react/form";

const employee = {
  name: "John Heart",
  officeNumber: 901,
  email: "jheart@dx-email.com",
};

export default function Validation() {
  return (
    <Form formData={employee} colCount={2}>
      <SimpleItem dataField="name" isRequired={true}>
        <StringLengthRule min={3} max={50} />
      </SimpleItem>
      <SimpleItem dataField="officeNumber">
        <NumericRule />
      </SimpleItem>
      <SimpleItem dataField="email">
        <EmailRule />
      </SimpleItem>
    </Form>
  );
}
