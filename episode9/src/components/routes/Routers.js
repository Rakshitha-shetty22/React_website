import React, { lazy, Suspense } from 'react';
import { createBrowserRouter,Outlet } from 'react-router-dom';
//import About from "../about/About";
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

const About = lazy(()=> import("../about/About"))

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <Suspense fallback={<h1>loading... plaese wait</h1>}><About /></Suspense>},
      { path:"/contactus", element: <ContactUs /> },
      { path: "/restaurant/:resId", element: <Restaurantmenu/>} //wroking is there in Home.js
    ],
  },
]);

export default Routers;
