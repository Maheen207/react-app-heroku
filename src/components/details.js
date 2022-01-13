import React, {Component} from "react";
import { Link } from "react-router-dom";
import mutton from '../image/mutton.jpg';
const Details=(props)=>{
    return(
<div class="card"  >
  <img style={{borderRadius:20, height:200}} class="card-img-top" src={props.match.params.i} alt="Card image cap"/>
  <div class="card-body" style={{textAlign:"center"}}>
    <h5 id="heading" class="card-title" ><b>{props.match.params.title}</b></h5>
    <p class="card-text">{props.match.params.text}</p>
    <p class="card-text text-primary">{props.match.params.quantity}</p>
    <a href="#" class="btn btn-primary">{props.match.params.b}</a>
  </div>
</div>
);
}
export default Details;