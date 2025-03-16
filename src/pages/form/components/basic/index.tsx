import "devextreme/dist/css/dx.light.css";

import { Form } from "devextreme-react/form";

const employee = {
  name: "John Heart",
  officeNumber: 901,
  hireDate: new Date(2012, 4, 13),
};

export default function Basic() {
  return <Form formData={employee} />;
}
