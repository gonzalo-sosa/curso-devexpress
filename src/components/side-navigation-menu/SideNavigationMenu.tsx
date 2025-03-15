import { TreeView, type TreeViewRef } from "devextreme-react/tree-view";
import * as events from "devextreme/events";
import type React from "react";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { navigation } from "../../app-navigation";
import { useNavigation } from "../../contexts/navigation";
import { useScreenSize } from "../../utils/media-query";
import "./SideNavigationMenu.scss";
import type { SideNavigationMenuProps } from "../../types";

import { ThemeContext } from "../../theme";

export default function SideNavigationMenu(
	props: React.PropsWithChildren<SideNavigationMenuProps>,
) {
	const { children, selectedItemChanged, openMenu, compactMode, onMenuReady } =
		props;

	const theme = useContext(ThemeContext);
	const { isLarge } = useScreenSize();
	function normalizePath() {
		const paths = [];
		for (const item of navigation) {
			if (item)
				paths.push({
					...item,
					expanded: isLarge,
					path: item.path
						? !/^\//.test(item.path)
							? `/${item.path}`
							: item.path
						: undefined,
				});
		}

		return paths;
	}

	const items = useMemo(
		normalizePath,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const {
		navigationData: { currentPath },
	} = useNavigation();

	const treeViewRef = useRef<TreeViewRef>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const getWrapperRef = useCallback(
		(element: HTMLDivElement) => {
			const prevElement = wrapperRef.current;
			if (prevElement) {
				events.off(prevElement, "dxclick");
			}

			wrapperRef.current = element;
			events.on(element, "dxclick", (e: React.PointerEvent) => {
				openMenu(e);
			});
		},
		[openMenu],
	);

	useEffect(() => {
		const treeView = treeViewRef.current && treeViewRef.current.instance();
		if (!treeView) {
			return;
		}

		if (currentPath !== undefined) {
			treeView.selectItem(currentPath);
			treeView.expandItem(currentPath);
		}

		if (compactMode) {
			treeView.collapseAll();
		}
	}, [currentPath, compactMode]);

	return (
		<div
			className={`dx-swatch-additional${
				theme?.isDark() ? "-dark" : ""
			} side-navigation-menu`}
			ref={getWrapperRef}
		>
			{children}
			<div className={"menu-container"}>
				<TreeView
					ref={treeViewRef}
					items={items}
					keyExpr={"path"}
					selectionMode={"single"}
					focusStateEnabled={false}
					expandEvent={"click"}
					onItemClick={selectedItemChanged}
					onContentReady={onMenuReady}
					width={"100%"}
				/>
			</div>
		</div>
	);
}
