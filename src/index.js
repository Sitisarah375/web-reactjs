import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/project",
      element: <ProjectPage />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
