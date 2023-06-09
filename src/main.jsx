import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Books from "./Components/Books/Books";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import BookDetail from "./Components/BookDetail/BookDetail";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:bookId",
        element: <BookDetail></BookDetail>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
