import React from "react";

import {
  createBrowserRouter, Outlet, RouterProvider
} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SingleBlog from "./pages/SingleBlog";
import Write from "./pages/Write";
import "./Style.scss";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <SingleBlog/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },

    ]
  },
  {
    path: "/singleBlog",
    element: <SingleBlog/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
       <RouterProvider router={router} />
       </div>
    </div>
  );
}



export default App;
