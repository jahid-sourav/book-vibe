import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import BookDetail from "../pages/bookDetail/BookDetail";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
    ],
  },
]);

export default router;
