import Button from "devextreme-react/button";
import Toolbar, { Item } from "devextreme-react/toolbar";
import React from "react";
import UserPanel from "../user-panel/UserPanel";
import "./Header.scss";
import { Template } from "devextreme-react/core/template";
import type { HeaderProps } from "../../types";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";

export default function Header({
	menuToggleEnabled,
	title,
	toggleMenu,
}: HeaderProps) {
	return (
		<header className={"header-component"}>
			<Toolbar className={"header-toolbar"}>
				<Item
					visible={menuToggleEnabled}
					location={"before"}
					widget={"dxButton"}
					cssClass={"menu-button"}
				>
					<Button icon="menu" stylingMode="text" onClick={toggleMenu} />
				</Item>
				<Item
					location={"before"}
					cssClass={"header-title"}
					text={title}
					visible={!!title}
				/>
				<Item location={"after"}>
					<ThemeSwitcher />
				</Item>
				<Item
					location="after"
					locateInMenu="auto"
					menuItemTemplate="userPanelTemplate"
				>
					<UserPanel menuMode="context" />
				</Item>
				<Template name="userPanelTemplate">
					<UserPanel menuMode="list" />
				</Template>
			</Toolbar>
		</header>
	);
}
