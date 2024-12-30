import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root'
import ErrorPage from './errorPage'
import About from './routes/about'
import Writing from  './routes/writing'
import Post from './components/writing/Post'
import LandingPage from './components/LandingPage';
import Passarelleo from './routes/passarelleo';
import Imperialism from './routes/imperialism';
import Messages from './routes/messages';
import Fraternity from './unused components/fraternity';
import FullTree from './routes/fulltree'
import NavBar from './components/navigation/NavBar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TreePage from './unused components/tree/treePage';

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
        path: '/writing',
        element: <Writing />,
      },
      {
        path: '/dev/post/:postID',
        element: <Post />,
      },
      {
        path: '/fraternity',
        element: <Fraternity />,
      },
      {
        path: '/passarelleo',
        element: <Passarelleo />,
      },
      {
        path: '/imperialism',
        element: <Imperialism />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/fraternitytree',
        element: <FullTree />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);