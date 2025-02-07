import React from "react";
import Navbar from "./component/Navbar"; 
import Home from './component/Home';
import Footer from './component/Footer';
import Shop from './component/Shop';
import StoreList from "./component/Store";
import Contact from "./component/Contact";
import Blog from './component/Blog';
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseStateHook from './component/UseStateHook';
import Homepage from'./component/Homepage';
import Arrival from './component/Arrival';
import ProductDetail from './component/ProductDetail';
import Singlepage from'./component/Singlepage';
function App() {
  return (
    <div>
      <Router> {/* Use Router here */}
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home/>}/> {/* Removed Layout (if not defined) */}
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/vendor' element={<StoreList/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Blog'    element={<Blog/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/useStateHook" element={<userStateHook/>}/>
        <Route path="View" element={<Homepage/>}/>
        <Route path="/Singlecard/:id"  element={<Singlepage/>}/>
        <Route path="/" element={<Arrival/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
