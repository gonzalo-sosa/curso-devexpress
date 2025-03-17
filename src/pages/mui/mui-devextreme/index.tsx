import { type FormEvent, useCallback, useState } from "react";

// import { useTheme } from "styled-components";

import {
	FormControl as MUIFormControl,
	useFormControlContext,
} from "@mui/base/FormControl";
import { Input as MUIInput, InputLabel as MUIInputLabel } from "@mui/material";
import MUIFormLabel from "@mui/material/FormLabel";
import { useTheme } from "@mui/material/styles";
import {
	type SxProps,
	type Theme,
	styled,
	unstable_styleFunctionSx,
} from "@mui/system";

import DxButton from "devextreme-react/button";
import DXCheckBox from "devextreme-react/check-box";
import DXTextBox from "devextreme-react/text-box";
import notify from "devextreme/ui/notify";

interface FormData {
	textBox: string;
	muiInput: string;
	checkBox: boolean | null;
}

//important - starting letter of HOC should be small to be able to use hooks without lint error
const dX_MUI_Form_Wrapper_HOC =
	(DXComponent: any, componentName: keyof FormData) => (props: any) => {
		const { onValueChange, ...restProps } = props;
		const value = useFormControlContext()?.value as FormData;
		return (
			<DXComponent
				value={value[componentName]}
				onValueChange={onValueChange}
				{...restProps}
			/>
		);
	};

const DXTextBoxWrapper = dX_MUI_Form_Wrapper_HOC(DXTextBox, "textBox");
const DXCheckBoxWrapper = dX_MUI_Form_Wrapper_HOC(DXCheckBox, "checkBox");

interface DivProps {
	sx?: SxProps;
}
const DxButtonSxWrapped = styled(DxButton)<DivProps>(unstable_styleFunctionSx);

const DefaultFormData = {
	textBox: "",
	muiInput: "",
	checkBox: false,
};

export default function MuiDevextreme() {
	const [formData, updateFormData] = useState<FormData>(DefaultFormData);
	const theme = useTheme() as Theme;
	const handleFormDataChange =
		(name: string) => (value: string | boolean | null) => {
			updateFormData({ ...formData, [name]: value });
		};
	const handleMuiFormDataChange =
		(name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			updateFormData({ ...formData, [name]: event.target.value });
		};
	const handleSubmit = useCallback(
		(event: FormEvent) => {
			event.preventDefault();
			notify(
				`User ${formData.textBox} ${formData.muiInput} succesfully registered`,
			);
		},
		[formData],
	);
	const handleReset = useCallback(() => {
		updateFormData(DefaultFormData);
	}, []);
	return (
		<form onSubmit={handleSubmit}>
			<MUIFormControl value={formData} className="form" required>
				<MUIFormLabel component="legend">Name</MUIFormLabel>
				<DXTextBoxWrapper onValueChange={handleFormDataChange("textBox")} />
				<MUIInputLabel>Surname</MUIInputLabel>
				<MUIInput
					value={formData.muiInput}
					onChange={handleMuiFormDataChange("muiInput")}
				/>{" "}
				{/* This is to demonstrate how to handle changes if you have both MUI and DX inputs */}
				<MUIInputLabel>Options</MUIInputLabel>
				<DXCheckBoxWrapper
					onValueChange={handleFormDataChange("checkBox")}
					text="Need further instructions"
				/>
				<br />
				<DxButtonSxWrapped
					sx={{
						backgroundColor: theme.palette.error.main,
						color: theme.palette.text.secondary,
					}}
					text="Reset Form"
					onClick={handleReset}
				/>
				<button type="submit">Submit</button>
			</MUIFormControl>
		</form>
	);
}
