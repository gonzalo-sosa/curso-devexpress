import HorizontalVirtualScrolling from "./horizontal-virtual-scrolling";
import InfiniteScrolling from "./infinite-scrolling";
import LocalVirtualScrolling from "./local-virtual-scrolling";
import RecordPaging from "./record-paging";
import RemoteVirtualScrolling from "./remote-virtual-scrolling";

export default function PagingAndScrolling() {
	return (
		<>
			<div>
				<h4>Record Paging</h4>
				<RecordPaging />
			</div>
			<div>
				<h4>Local Virtual Scrolling</h4>
				<LocalVirtualScrolling />
			</div>
			<div>
				<h4>Remote Virtual Scrolling</h4>
				<RemoteVirtualScrolling />
			</div>
			<div>
				<h4>Horizontal Virtual Scrolling</h4>
				<HorizontalVirtualScrolling />
			</div>
			<div>
				<h4>Infinite Scrolling</h4>
				<InfiniteScrolling />
			</div>
		</>
	);
}
