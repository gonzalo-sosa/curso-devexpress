import React from "react";
import "./datagrid.scss";
import Basic from "./components/basic";
import CustomizeToolbar from "./components/customize-toolbar";
import DisplaySummaries from "./components/display-summaries";
import EditAndValidate from "./components/edit-and-validate";
import Export from "./components/export";
import FilterAndSearch from "./components/filter-and-search";
import Fix from "./components/fix";
import Group from "./components/group";
import Hide from "./components/hide";
import MasterDetail from "./components/master-detail";
import Overview from "./components/overview";
import Reorder from "./components/reorder";
import Resize from "./components/resize";
import SelectRecords from "./components/select-records";
import Sort from "./components/sort";

export default function PageDataGrid() {
	return (
		<React.Fragment>
			<h2>Datagrid</h2>
			<div className={"content-block"}>
				<div className={"dx-card responsive-paddings"}>
					<div>
						<h3>Overview</h3>
						<Overview />
					</div>
					<div>
						<h3>Reorder</h3>
						<Reorder />
					</div>
					<div>
						<h3>Resize Columns</h3>
						<Resize />
					</div>
					<div>
						<h3>Fix Columns</h3>
						<Fix />
					</div>
					<div>
						<h3>Hide Columns</h3>
						<Hide />
					</div>
					<div>
						<h3>Sort Data</h3>
						<Sort />
					</div>
					<div>
						<h3>Filter and Search Data</h3>
						<FilterAndSearch />
					</div>
					<div>
						<h3>Group Data</h3>
						<Group />
					</div>
					<div>
						<h3>Edit and Validate Data</h3>
						<EditAndValidate />
					</div>
					<div>
						<h3>Select Records</h3>
						<SelectRecords />
					</div>
					<div>
						<h3>Display Summaries</h3>
						<DisplaySummaries />
					</div>
					<div>
						<h3>Customize the Toolbar</h3>
						<CustomizeToolbar />
					</div>
					<div>
						<h3>Configure Master-Detail Interface</h3>
						<MasterDetail />
					</div>
					<div>
						<h3>Export Data</h3>
						<Export />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
