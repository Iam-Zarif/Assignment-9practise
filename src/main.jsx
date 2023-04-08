import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Header/Header';
import Home from './Header/Home/Home';
import Details from './Details/Details';
import EachCountry from './EachCountry/EachCountry';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "details",
        element: <Details></Details>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
path:'/details/moreDetails/', element:<EachCountry></EachCountry>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
