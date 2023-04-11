import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Job from './components/Job/Job';
import AppliedJobs from './components/Applied-jobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>, 
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }, 
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      }, 
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      }, 
      {
        path:'/Job/:id',
        element: <Job></Job>,
        // loader: ()=>fetch(`featuredJobsData.json`)
      },
      {
        path:'blog', 
        element: <Blog></Blog>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
