import React from "react";
import { IoClose } from "react-icons/io5";
import '../Style/Hook.css';

 const UseStateHook =({HandleLoginForm})=>{
         
    return(
  <div className="modal-overlay">
<div className="modal">
      <div className="form-login">
      <h2> login</h2>
      <IoClose className="close-icon" onClick={HandleLoginForm}/>
     <input type="email" placeholder="enter Email" required/> 
     <input type="password" placeholder="enter password" required/>
     <button type="submit" className="button">Login</button>
     <p>Forgot Password? <a href="#">Reset</a></p>
   <p className="signup-link">Don't have an account? 
    <a href="/Signup">Sign Up</a></p>
    </div>
    </div>
</div>
  );
  };
 export default UseStateHook;