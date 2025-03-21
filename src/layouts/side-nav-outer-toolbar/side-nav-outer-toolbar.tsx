import Drawer from "devextreme-react/drawer";
import { ScrollView, type ScrollViewRef } from "devextreme-react/scroll-view";
import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { Footer, Header, SideNavigationMenu } from "../../components";
import "./side-nav-outer-toolbar.scss";
import type { ButtonTypes } from "devextreme-react/button";
import { Template } from "devextreme-react/core/template";
import type { TreeViewTypes } from "devextreme-react/tree-view";
import type { SideNavToolbarProps } from "../../types";
import { useScreenSize } from "../../utils/media-query";
import { useMenuPatch } from "../../utils/patches";

export default function SideNavOuterToolbar({
	title,
	children,
}: React.PropsWithChildren<SideNavToolbarProps>) {
	const scrollViewRef = useRef<ScrollViewRef>(null);
	const navigate = useNavigate();
	const { isXSmall, isLarge } = useScreenSize();
	const [patchCssClass, onMenuReady] = useMenuPatch();
	const [menuStatus, setMenuStatus] = useState(
		isLarge ? MenuStatus.Opened : MenuStatus.Closed,
	);

	const toggleMenu = useCallback(({ event }: ButtonTypes.ClickEvent) => {
		setMenuStatus((prevMenuStatus) =>
			prevMenuStatus === MenuStatus.Closed
				? MenuStatus.Opened
				: MenuStatus.Closed,
		);
		event?.stopPropagation();
	}, []);

	const temporaryOpenMenu = useCallback(() => {
		setMenuStatus((prevMenuStatus) =>
			prevMenuStatus === MenuStatus.Closed
				? MenuStatus.TemporaryOpened
				: prevMenuStatus,
		);
	}, []);

	const onOutsideClick = useCallback(() => {
		setMenuStatus((prevMenuStatus) =>
			prevMenuStatus !== MenuStatus.Closed && !isLarge
				? MenuStatus.Closed
				: prevMenuStatus,
		);
		return menuStatus === MenuStatus.Closed;
	}, [isLarge, menuStatus]);

	const onNavigationChanged = useCallback(
		({ itemData, event, node }: TreeViewTypes.ItemClickEvent) => {
			if (
				menuStatus === MenuStatus.Closed ||
				!itemData?.path ||
				node?.selected
			) {
				event?.preventDefault();
				return;
			}

			navigate(itemData.path);
			scrollViewRef.current?.instance().scrollTo(0);

			if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
				setMenuStatus(MenuStatus.Closed);
				event?.stopPropagation();
			}
		},
		[navigate, menuStatus, isLarge],
	);

	return (
		<div className={"side-nav-outer-toolbar"}>
			<Header menuToggleEnabled toggleMenu={toggleMenu} title={title} />
			<Drawer
				className={["drawer layout-body", patchCssClass].join(" ")}
				position={"before"}
				closeOnOutsideClick={onOutsideClick}
				openedStateMode={isLarge ? "shrink" : "overlap"}
				revealMode={isXSmall ? "slide" : "expand"}
				minSize={isXSmall ? 0 : 60}
				maxSize={250}
				shading={!isLarge}
				opened={menuStatus !== MenuStatus.Closed}
				template={"menu"}
			>
				<div className={"container"}>
					<ScrollView ref={scrollViewRef} className={"with-footer"}>
						<div className={"content"}>
							{React.Children.map(children, (item: any) => {
								return item.type !== Footer && item;
							})}
						</div>
						<div className={"content-block"}>
							{React.Children.map(children, (item: any) => {
								return item.type === Footer && item;
							})}
						</div>
					</ScrollView>
				</div>
				<Template name={"menu"}>
					<SideNavigationMenu
						compactMode={menuStatus === MenuStatus.Closed}
						selectedItemChanged={onNavigationChanged}
						openMenu={temporaryOpenMenu}
						onMenuReady={onMenuReady}
					/>
				</Template>
			</Drawer>
		</div>
	);
}

const MenuStatus = {
	Closed: 1,
	Opened: 2,
	TemporaryOpened: 3,
};
