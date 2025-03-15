import Button from "devextreme-react/button";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../../theme";

export const ThemeSwitcher = () => {
	const themeContext = useContext(ThemeContext);

	const onButtonClick = useCallback(() => {
		themeContext?.switchTheme();
	}, [themeContext]);

	return (
		<div>
			<Button
				className="theme-button"
				stylingMode="text"
				icon={`${themeContext?.theme === "dark" ? "sun" : "moon"}`}
				onClick={onButtonClick}
			/>
		</div>
	);
};
