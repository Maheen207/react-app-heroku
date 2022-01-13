import React, {Component} from "react";
import { Link } from "react-router-dom";
import mutton from '../image/mutton.jpg';

const Card_meat=(props)=>{
    return(
      
<div id="card_back" class="card" style={{width:300, marginLeft:10, marginRight:20, borderRadius:10}} >
 <img style={{borderRadius:10, height:200}} class="card-img-top" src={props.i} alt="Card image cap"/>
  <div class="card-body" style={{textAlign:"center"}}>
  <Link to={`/details/${props.b}/${props.title}/${props.text}`}style={{ color:"black",textDecoration:'inherit'}}> <h5 id="heading" class="card-title" ><b>{props.title}</b></h5>
    <p class="card-text">{props.text}</p>
    <p class="card-text" style={{ marginBottom:10}}>{props.quantity}</p></Link>
  <Link to={`/Cart/${props.b}/${props.title}/${props.text}/${props.quantity}`} > <a id="but2" href="#" class="btn "style={{color:"white"}}>{props.b}</a></Link>
  </div>
</div>
);
}
export default Card_meat;