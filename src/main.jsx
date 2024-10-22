import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import ListedBooksProvider from "./providers/ListedBooksProvider";
import router from "./routes/Routes.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ListedBooksProvider>
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" />
        </ListedBooksProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);
