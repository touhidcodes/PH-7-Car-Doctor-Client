import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import App from "../App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
	},
]);

export default router;
