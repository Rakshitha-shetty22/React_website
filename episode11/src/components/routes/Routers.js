import React, { lazy, Suspense, useEffect, useState } from 'react';
import { createBrowserRouter,Outlet } from 'react-router-dom';
//import About from "../about/About";
import Header from "../header/Header";
import Home from "../home/Home";
import ErrorPage from '../error/Error';
import ContactUs from '../contactUs/ContactUs';
import Restaurantmenu from '../restaurantMenu/Restaurantmenu';
import UserContext from '../../common/UserContext';


const Layout = () => {
  const [user, setUser] =useState();

  useEffect(()=>{
   const name = "raksh shetty"
    setUser(name);
  },[])
  
  //so if we get the user name after certain fetch u can use it over here

  return (  
    <div>
      <UserContext.Provider value={{ loggedUser:user, setUser}}>   
         {/* provider is used to change the value of context */}
      <Header />
      <main>
        <Outlet /> 
      </main>
    </UserContext.Provider>
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
