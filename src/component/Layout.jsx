import React from "react";
import Footer from "./component/Footer";
import Navbar from"./component/Navbar";
function Layout(){
    <>
    return(
       <Navbar/>
       <Outlet/>
       <Footer/>

    )</>
}
export default Layout;