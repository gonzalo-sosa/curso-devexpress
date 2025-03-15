import { withNavigationWatcher } from "./contexts/navigation";
import {
	AboutPage,
	ChartPage,
	DatagridPage,
	FileUploaderPage,
	FormPage,
	HomePage,
	ProfilePage,
	TasksPage,
} from "./pages";

const routes = [
	{
		path: "/tasks",
		element: TasksPage,
	},
	{
		path: "/profile",
		element: ProfilePage,
	},
	{
		path: "/home",
		element: HomePage,
	},
	{
		path: "/about",
		element: AboutPage,
	},
	{
		path: "/chart",
		element: ChartPage,
	},
	{
		path: "/datagrid",
		element: DatagridPage,
	},
	{
		path: "/form",
		element: FormPage,
	},
	,
	{
		path: "/file-uploader",
		element: FileUploaderPage,
	},
];

export default routes.map((route) => {
	return {
		...route,
		element: withNavigationWatcher(route.element, route.path),
	};
});
