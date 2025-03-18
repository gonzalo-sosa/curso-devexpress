import DataGrid, { type DataGridTypes } from "devextreme-react/data-grid";
import { useEffect, useState } from "react";

import { createStore } from "devextreme-aspnet-data-nojquery";

const url = "https://js.devexpress.com/Demos/NetCore/api/DataGridWebApi";

const getMasterDetailGridDataSource = (id: number) => ({
	store: createStore({
		loadUrl: `${url}/OrderDetails`,
		loadParams: { orderID: id },
		onBeforeSend: (method, ajaxOptions) => {
			ajaxOptions.xhrFields = { withCredentials: true };
		},
	}),
});

const MasterDetailGrid = (props: DataGridTypes.MasterDetailTemplateData) => {
	const [dataSource, setDataSource] = useState(null);

	useEffect(() => {
		const masterDetailDataSource = getMasterDetailGridDataSource(
			props.data.key,
		);
		setDataSource(masterDetailDataSource);
	}, [props.data.key]);

	return <DataGrid dataSource={dataSource} showBorders={true} />;
};

export default MasterDetailGrid;
