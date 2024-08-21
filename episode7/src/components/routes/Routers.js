import React from 'react';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import About from "../about/About";
import Header from "../header/Header";
import Home from "../home/Home";
import ErrorPage from '../error/Error';
import ContactUs from '../contactUs/ContactUs';
import Restaurantmenu from '../restaurantMenu/Restaurantmenu';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path:"/contactus", element: <ContactUs /> },
      { path: "/restaurant/:resId", element: <Restaurantmenu/>} //wroking is there in Home.js
    ],
  },
]);

export default Routers;
