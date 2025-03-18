import CustomDataSource from "./custom-data-source";
import JsonData from "./json-data";
import ODataService from "./odata-service";
import RealTimeUpdates from "./real-time-updates";
import SignalrService from "./signalr-service";
import SimpleArray from "./simple-array";
import WebApiService from "./web-api-service";

export default function DataBinding() {
	return (
		<>
			<div>
				<h4>Simple Array</h4>
				<SimpleArray />
			</div>
			<div>
				<h4>JSON Data</h4>
				<JsonData />
			</div>
			<div>
				<h4>OData Service</h4>
				<ODataService />
			</div>
			<div>
				<h4>Custom Data Source</h4>
				<CustomDataSource />
			</div>
			<div>
				<h4>Web API Service</h4>
				<WebApiService />
			</div>
			<div>
				<h4>SignalR Service</h4>
				<SignalrService />
			</div>
			<div>
				<h4>Real-Time Updates</h4>
				<RealTimeUpdates />
			</div>
		</>
	);
}
