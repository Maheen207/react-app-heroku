import React, {Component} from "react";
import { Link } from "react-router-dom";
import mutton from '../image/mutton.jpg';
const Cards_meat=(props)=>{
    return(
<div id="card_back" class="card" style={{width:300, marginLeft:10, marginRight:20, borderRadius:20}} >
  <img style={{borderRadius:20, height:200}} class="card-img-top" src={props.i} alt="Card image cap"/>
  <div class="card-body" style={{textAlign:"center"}}>
    <h5 id="heading" class="card-title" ><b>{props.title}</b></h5>
    <p class="card-text">{props.text}</p>
    <p class="card-text text-primary">{props.quantity}</p>
    <Link to="/mutton">  <a href="#" class="btn btn-primary">{props.b}</a></Link>
  </div>
</div>
);
}
export default Cards_meat;