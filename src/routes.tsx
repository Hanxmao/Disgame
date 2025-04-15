import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import BrowsePage from "./pages/BrowsePage";
import GameGenre from "./pages/GameGenre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <HomePage /> },
        { path:"/games", element: <BrowsePage /> },
        { path:"/games/:slug", element: <GameDetailPage /> },
        { path:"/game-list/:genre", element: <GameGenre /> },
    ]
  },
]);

export default router;
