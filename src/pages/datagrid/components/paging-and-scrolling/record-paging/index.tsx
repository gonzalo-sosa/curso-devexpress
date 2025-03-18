import CheckBox from "devextreme-react/check-box";
import DataGrid, {
	Scrolling,
	Pager,
	Paging,
	type DataGridTypes,
} from "devextreme-react/data-grid";
import SelectBox from "devextreme-react/select-box";
import type { DisplayMode } from "devextreme/common";
import { useCallback, useState } from "react";
import { displayModeLabel, generateData } from "./data";
import "./styles.scss";

const displayModes = [
	{ text: "Display Mode 'full'", value: "full" },
	{ text: "Display Mode 'compact'", value: "compact" },
];
const allowedPageSizes: (DataGridTypes.PagerPageSize | number)[] = [
	5,
	10,
	"all",
];
const data = generateData(100000);

const customizeColumns = (columns: DataGridTypes.Column[]) => {
	columns[0].width = 70;
};

export default function RecordPaging() {
	const [displayMode, setDisplayMode] = useState<DisplayMode>("full");
	const [showPageSizeSelector, setShowPageSizeSelector] = useState(true);
	const [showInfo, setShowInfo] = useState(true);
	const [showNavButtons, setShowNavButtons] = useState(true);

	const displayModeChange = useCallback((value: DisplayMode) => {
		setDisplayMode(value);
	}, []);

	const showPageSizeSelectorChange = useCallback((value?: boolean | null) => {
		if (value) setShowPageSizeSelector(value);
	}, []);

	const showInfoChange = useCallback((value?: boolean | null) => {
		if (value) setShowInfo(value);
	}, []);

	const showNavButtonsChange = useCallback((value?: boolean | null) => {
		if (value) setShowNavButtons(value);
	}, []);

	const isCompactMode = useCallback(
		() => displayMode === "compact",
		[displayMode],
	);

	return (
		<div>
			<DataGrid
				id="gridContainer"
				dataSource={data}
				keyExpr="id"
				showBorders={true}
				customizeColumns={customizeColumns}
			>
				<Scrolling rowRenderingMode="virtual" />
				<Paging defaultPageSize={10} />
				<Pager
					visible={true}
					allowedPageSizes={allowedPageSizes}
					displayMode={displayMode}
					showPageSizeSelector={showPageSizeSelector}
					showInfo={showInfo}
					showNavigationButtons={showNavButtons}
				/>
			</DataGrid>
			<div className="options">
				<div className="caption">Options</div>
				<div className="option-container">
					<div className="option">
						<SelectBox
							id="displayModes"
							items={displayModes}
							displayExpr="text"
							inputAttr={displayModeLabel}
							valueExpr="value"
							value={displayMode}
							onValueChange={displayModeChange}
						/>
					</div>
					<div className="option">
						<CheckBox
							id="showPageSizes"
							text="Show Page Size Selector"
							value={showPageSizeSelector}
							onValueChange={showPageSizeSelectorChange}
						/>
					</div>
					<div className="option">
						<CheckBox
							id="showInfo"
							text="Show Info Text"
							value={showInfo}
							onValueChange={showInfoChange}
						/>
					</div>
					<div className="option">
						<CheckBox
							id="showNavButtons"
							text="Show Navigation Buttons"
							value={showNavButtons}
							onValueChange={showNavButtonsChange}
							disabled={isCompactMode()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
