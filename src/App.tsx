import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Grade9 from "./pages/Grade9";
import Grade10 from "./pages/Grade10";
import Grade11 from "./pages/Grade11";
import Grade12 from "./pages/Grade12";
import Subject from "./pages/Subject";
import Quiz from "./pages/Quiz";
import Grade11Subject from "./pages/Grade11Subject";
import Grade11Quiz from "./pages/Grade11Quiz";
import Grade12Subject from "./pages/Grade12Subject";
import Grade12Quiz from "./pages/Grade12Quiz";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/grade9",
    element: <Grade9 />,
  },
  {
    path: "/grade10",
    element: <Grade10 />,
  },
  {
    path: "/grade11",
    element: <Grade11 />,
  },
  {
    path: "/grade-12",
    element: <Grade12 />,
  },
  {
    path: "/grade11/:subject",
    element: <Grade11Subject />,
  },
  {
    path: "/grade11/:subject/:chapter/:difficulty",
    element: <Grade11Quiz />,
  },
  {
    path: "/grade-12/:subject",
    element: <Grade12Subject />,
  },
  {
    path: "/grade-12/:subject/:chapter/:difficulty",
    element: <Grade12Quiz />,
  },
  {
    path: "/:grade/:subject",
    element: <Subject />,
  },
  {
    path: "/:grade/:subject/:chapter/:difficulty",
    element: <Quiz />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;