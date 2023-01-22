import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import UserPage from "./routes/users.jsx";
import Login from "./routes/login.jsx";
import Chirp from "./routes/chirp.jsx";
import{
  loader as chirpLoader,
} from "./routes/users";
import Search from "./routes/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    // we will need logic here for giving a different page for every user
    path: "/user/:id",
    element: <UserPage/>,
    loader: chirpLoader
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/chirp",
    element: <Chirp/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);