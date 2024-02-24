import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>THis is the default main Content</div>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   },
//   {
//     path: '/error-page',
//     element: <Error></Error>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
