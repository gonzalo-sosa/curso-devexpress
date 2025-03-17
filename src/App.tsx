import "devextreme/dist/css/dx.common.css";
import "./themes/generated/theme.base.dark.css";
import "./themes/generated/theme.base.css";
import "./themes/generated/theme.additional.dark.css";
import "./themes/generated/theme.additional.css";
import { HashRouter as Router } from "react-router-dom";
import "./dx-styles.scss";
import LoadPanel from "devextreme-react/load-panel";
import Content from "./Content";
import UnauthenticatedContent from "./UnauthenticatedContent";
import { AuthProvider, useAuth } from "./contexts/auth";
import { NavigationProvider } from "./contexts/navigation";
import { ThemeContext, useThemeContext } from "./theme";
import { useScreenSizeClass } from "./utils/media-query";

function App() {
	const { user, loading } = useAuth();

	if (loading) {
		return <LoadPanel visible={true} />;
	}

	if (user) {
		return <Content />;
	}

	return <UnauthenticatedContent />;
}

export default function Root() {
	const screenSizeClass = useScreenSizeClass();
	const themeContext = useThemeContext();

	return (
		<Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
			<ThemeContext.Provider value={themeContext}>
				<AuthProvider>
					<NavigationProvider>
						<div className={`app ${screenSizeClass}`}>
							<App />
						</div>
					</NavigationProvider>
				</AuthProvider>
			</ThemeContext.Provider>
		</Router>
	);
}
