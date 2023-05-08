import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookPage from "./pages/BookPage";
import Contact from "./pages/Contact";
import Makeup from "./pages/Makeup";
import Lashes from "./pages/Lashes";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/book", element: <BookPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/makeup", element: <Makeup /> },
  { path: "/lashes", element: <Lashes /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
