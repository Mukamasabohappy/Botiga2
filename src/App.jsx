import React from "react";
import Home from './component/Home';
import Shop from './component/Shop';
import StoreList from "./component/Store";
import Contact from "./component/Contact";
import Blog from './component/Blog';
import Login from "./component/Login";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from'./component/Homepage';
import Arrival from './component/Arrival';
import ProductDetail from './component/ProductDetail';
import Singlepage from'./component/Singlepage';

import DashboardLayout from "./Dashboard/DashboardLayout";
import DashView from "./Dashboard/DashView";
import Chart from "./Dashboard/Chart";
import Invoice from "./Dashboard/Invoice";
import Layout from './component/Layout.jsx'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path='/' index element={<Home/>}/> 
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/vendor' element={<StoreList/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Blog'    element={<Blog/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/useStateHook" element={<userStateHook/>}/>
         <Route path="/View" element={<Homepage/>}/>
         <Route path="/Singlecard/:id"  element={<Singlepage/>}/>
          <Route path="/" element={<Arrival/>} /> 
         <Route path="/product/:id" element={<ProductDetail />} />
         <Route path='/' element={<Chart/>}/> 
         </Route>
      <Route path="/" element={<DashboardLayout/>}>
      <Route path='/d'  index element={<DashView/>}/>
      <Route path='/Dashboard' element={<Chart/>}/>
      <Route path='/Invoice' element={<Invoice/>}/>
                 </Route>
        </Routes>
        </BrowserRouter>
        
  );
}

export default App;
