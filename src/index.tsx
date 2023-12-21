import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root'
import ErrorPage from './errorPage'
import About from './routes/about'
import Dev from  './routes/dev'
import Post from './components/dev/Post'
import LandingPage from './components/LandingPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dev',
        element: <Dev />,
      },
      {
        path: '/dev/post/:postID',
        element: <Post />,
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);