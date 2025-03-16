import React from "react";
import "./form.scss";
import Section from "src/components/section";
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
				<Section title="Basic">
					<Basic />
				</Section>
				<Section title="Items">
					<Items />
				</Section>
				<Section title="Organize Items">
					<OrganizeItems />
				</Section>
				<Section title="Group">
					<Group />
				</Section>
				<Section title="Tabs">
					<Tabs />
				</Section>
				<Section title="Empty Space">
					<EmptySpace />
				</Section>
				<Section title="Item Labels">
					<ItemLabels />
				</Section>
				<Section title="Modify in Runtime">
					<ModifyInRuntime />
				</Section>
				<Section title="Validation">
					<Validation />
				</Section>
				<Section title="Submit">
					<Submit />
				</Section>
			</div>
		</div>
	</React.Fragment>
);
