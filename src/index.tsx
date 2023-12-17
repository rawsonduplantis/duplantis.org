import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root'
import ErrorPage from './errorPage'
import About from './routes/about'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './components/LandingPage';

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
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);