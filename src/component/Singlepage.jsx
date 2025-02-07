import React from "react";
import { useParams } from "react-router-dom";
import {ProductList} from './Homepage';
function Singlepage(){
    const {id}= useParams();
    console.log("productlist", id);
    const card=ProductList.find((card)=>card.id==id)
    return(
        <div>
        <div> <img src={home1.img}/></div>
        <div> {home1.title}</div>
    </div>)
}
export default Singlepage;