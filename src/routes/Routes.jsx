import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import BookDetail from "../pages/bookDetail/BookDetail";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/pages-to-read/PagesToRead";

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
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);

export default router;
