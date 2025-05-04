
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./components/Shop-Page";
import App from "./App";
import Checkout from "./components/Checkout";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "shop",
      element: <ShopPage />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    }
  ]);

export default router;