import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import SecondaryLayout from "../layouts/SecondaryLayout";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/",
		element: <SecondaryLayout />,
		children: [
			{
				path: "/login",
				element: <Login/>,
			},
		],
	},
]);

export default router;
