import "devextreme/dist/css/dx.light.css";

import { Form, SimpleItem } from "devextreme-react/form";

import { CheckBox } from "devextreme-react/check-box";
import type { ValueChangedEvent } from "devextreme/ui/check_box";
import { useCallback, useState } from "react";

const employee = {
	name: "John Heart",
	position: "CEO",
	hireDate: new Date(2012, 4, 13),
	officeNumber: 901,
	notes: "John has been in the Audio/Video industry since 1990.",
};

export default () => {
	const [isFormDisabled, setIsFormDisabled] = useState(false);

	const onCheckBoxValueChanged = useCallback((e: ValueChangedEvent) => {
		setIsFormDisabled(e.value);
	}, []);

	return (
		<div>
			<Form formData={employee} readOnly={isFormDisabled}>
				<SimpleItem dataField="name" />
				<SimpleItem dataField="position" />
				<SimpleItem dataField="hireDate" />
				<SimpleItem dataField="officeNumber" />
				<SimpleItem dataField="notes" colSpan={2} />
			</Form>

			<CheckBox
				text="Enable read-only mode"
				value={isFormDisabled}
				onValueChanged={onCheckBoxValueChanged}
			/>
		</div>
	);
};
