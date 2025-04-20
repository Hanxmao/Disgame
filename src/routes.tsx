import { createBrowserRouter } from "react-router-dom";
import BrowsePage from "./pages/BrowsePage";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import GameGenre from "./pages/GameGenre";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";

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
        { path:"/login", element: <Login /> },
        { path:"/sign-up", element: <Signup /> },
        { path:"/user", element: <User /> },
    ]
  },
]);

export default router;
