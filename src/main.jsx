import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './screens/home/Home';
import Recipe from './screens/recipes';
import Login from './screens/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path:"profile",
        element:<h1> profile </h1>
      },
      {
        path: "recipe",
        element:<Recipe/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
