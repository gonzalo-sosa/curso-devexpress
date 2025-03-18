import DXButton, { type ButtonTypes } from "devextreme-react/button";
import DXForm, {
	Item as DXItem,
	Label as DXLabel,
} from "devextreme-react/form";
import DXTextBox from "devextreme-react/text-box";
import { type FormEvent, useCallback, useState } from "react";

import notify from "devextreme/ui/notify";

import {
	Checkbox as MUICheckbox,
	Input as MUIInput,
	InputLabel as MUIInputLabel,
} from "@mui/material";
import MUIFormLabel from "@mui/material/FormLabel";

interface FormData {
	textBox: string;
	muiInput: string;
	checkBox: boolean | null;
}

export default function DevextremeMUI() {
	const [formData, updateFormData] = useState<FormData>({
		textBox: "",
		muiInput: "",
		checkBox: false,
	});
	const handleFormDataChange =
		(name: string) => (value: string | boolean | null) => {
			updateFormData({ ...formData, [name]: value });
		};
	const handleMuiFormDataChange =
		(name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			updateFormData({ ...formData, [name]: event.target.value });
		};
	const InputTemplate = () => {
		return <MUIInput onChange={handleMuiFormDataChange("muiInput")} />;
	};

	const handleSubmit = useCallback(
		(event: FormEvent | ButtonTypes.ClickEvent) => {
			notify(
				`User ${formData.textBox} ${formData.muiInput} successfully registered`,
			);
		},
		[formData],
	);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<DXForm className="form">
					<DXItem render={InputTemplate}>
						<DXLabel
							render={() => (
								<MUIFormLabel component="legend">Name</MUIFormLabel>
							)}
						/>
					</DXItem>
					<DXItem>
						<DXTextBox
							label="Surname"
							onValueChange={handleFormDataChange("textBox")}
						/>
					</DXItem>
					<DXItem
						render={() => (
							<>
								Need further instructions
								<MUICheckbox onChange={handleMuiFormDataChange("checkBox")} />
							</>
						)}
					/>
					<DXLabel render={() => <MUIInputLabel>Options</MUIInputLabel>} />
					<DXItem
						render={() => <DXButton onClick={handleSubmit}>Submit</DXButton>}
					/>
				</DXForm>
			</form>
		</>
	);
}
