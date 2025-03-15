import React from "react";
import "./form.scss";
import Basic from "./components/basic";
import EmptySpace from "./components/empty-space";
import Group from "./components/group";
import ItemLabels from "./components/item-labels";
import Items from "./components/items";
import ModifyInRuntime from "./components/modify-in-runtime";
import OrganizeItems from "./components/organize-items";
import Submit from "./components/submit";
import Tabs from "./components/tabs";
import Validation from "./components/validation";

export default () => (
	<React.Fragment>
		<h2>Form</h2>
		<div className={"content-block"}>
			<div className={"dx-card responsive-paddings"}>
				<div>
					<h3>Basic</h3>
					<Basic />
				</div>
				<div>
					<h3>Items</h3>
					<Items />
				</div>
				<div>
					<h3>Organize Items</h3>
					<OrganizeItems />
				</div>
				<div>
					<h3>Group</h3>
					<Group />
				</div>
				<div>
					<h3>Tabs</h3>
					<Tabs />
				</div>
				<div>
					<h3>Empty Space</h3>
					<EmptySpace />
				</div>
				<div>
					<h3>Item Labels</h3>
					<ItemLabels />
				</div>
				<div>
					<h3>Modify in Runtime</h3>
					<ModifyInRuntime />
				</div>
				<div>
					<h3>Validation</h3>
					<Validation />
				</div>
				<div>
					<h3>Submit</h3>
					<Submit />
				</div>
			</div>
		</div>
	</React.Fragment>
);
