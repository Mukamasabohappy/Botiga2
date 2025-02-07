import React from "react";
import "../Style/home.css";
import image1 from"../assets/pic1.jpg";
import image2 from"../assets/pic2.jpg";
import { useNavigate } from "react-router-dom";
export const ProductList =[
    {
id:1,
image: image1,
cardTitle: "oil"
 },
 {
     id:2,
    image: image2,
    cardTitle: "Sugar",
     }
];
function HomePage(){
    const navigation= useNavigate();
    const handleNavigate=(id) =>{
        navigation(`/singlecard/${id}`)
    }
    return(
<div className=" nav-container">
 {ProductList.map((item)=> (
    <div className="cont" key={item.id}>
    <div className="image"><img src={item.image}/></div>
 <div>{item.cardTitle}</div>
 <button type='button' className="bt-1"
 onClick={()=>handleNavigate(item.id)}
 >View</button>
 
</div>
))}
</div>
    )
}
export default HomePage;