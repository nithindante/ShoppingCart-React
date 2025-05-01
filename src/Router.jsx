
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./components/Shop-Page";
import App from "./App";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "shop",
      element: <ShopPage />,
    },
  ]);

export default router;