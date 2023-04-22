import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPokemon from './components/SearchPokemon';
import Home from './components/Home';


const appRounter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/searchpokemon',
        element: <SearchPokemon />,
      },
      {
        path: '/home',
        element: <Home />,
      }
    ]

  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRounter} />

  </React.StrictMode>
);
