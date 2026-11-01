import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogDetails from "./BlogDetails/BlogDetails.jsx";
import About from "./pages/About/About.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./App.css";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogDetails /> },
      { path: "/about", element: <About /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

export default function App() {
  return <RouterProvider router={routes} />;
}
