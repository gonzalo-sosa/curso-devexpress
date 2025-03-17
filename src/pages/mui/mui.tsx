import "./mui.scss";
import Section from "src/components/section";
import DevextremeMUI from "./devextreme-mui";
import MuiDevextreme from "./mui-devextreme";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		background: {
			paper: "#fff",
		},
		text: {
			primary: "#173A5E",
			secondary: "#EBE7E7",
		},
		action: {
			active: "#001E3C",
		},
		success: {
			main: "#4CAF50",
			dark: "#009688",
		},
		error: {
			main: "#FF6666",
		},
	},
});

export default function MUI() {
	return (
		<>
			<h2>Mui</h2>
			<div className={"content-block"}>
				<div className={"dx-card responsive-paddings"}>
					<ThemeProvider theme={theme}>
						<Section title="DevExtreme components inside MUI components">
							<DevextremeMUI />
						</Section>
						<Section title="MUI components inside DevExtreme components">
							<MuiDevextreme />
						</Section>
					</ThemeProvider>
				</div>
			</div>
		</>
	);
}
