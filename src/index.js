import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import FlightPage from './Pages/FlightPage';
import HotelPages from './Pages/HotelPages';
import AccountPage from './Pages/AccountPage';
const myRouter=createBrowserRouter([{
  errorElement:<ErrorPage/>,
  element:<App/>,
  path:"/",
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/flight",
      element:<FlightPage/>
    },
    {
      path:"/hotel",
      element:<HotelPages/>
    },
    {
      path:"/account",
      element:<AccountPage/>
    }
  ]
}],
{
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation:true,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={myRouter} />
  </React.StrictMode>
);

