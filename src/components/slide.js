import React from "react";
import Nav_meat from "./Nav_meat";
//import picture from "../image/background.jpg";
import beef from "../image/beef.jpg";
import fish from "../image/fish.jpg";
import chicken from "../image/chicken.jpg";
import { Link } from "react-router-dom";
const Slide=()=>{
    return( 
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={beef} style={{height:400}} className="d-block w-100" alt="..."/>
      <Link to="/Red"><div style={{color:'black'}} class="carousel-caption d-none d-md-block">
      <h3 id="heading"><b>Red Meat</b></h3>
    <p id="heading"><b>Juicy and healthy Red meat filled with nutrition. It has cut nicely with a tsp of Love.</b></p>
    <p id="heading">Beef, Goat, Lamb</p>
    </div></Link>
    </div>
    <div className="carousel-item">
      <img src={chicken} style={{height:400}} className="d-block w-100" alt="..."/>
      <Link to="/poultry"> <div style={{color:'black'}} class="carousel-caption d-none d-md-block">
      <h3 id="heading"><b>Poultry</b></h3>
    <p id="heading"><b>Juicy and healthy white meat filled with nutrition. It has cut nicely with a tsp of taste</b></p>
    <p id="heading">Chicken</p>
    </div></Link>
    </div>
    <div className="carousel-item">
      <img src={fish} style={{height:400}} className="d-block w-100" alt="..."/>
      <Link to="/fish"><div style={{color:'black'}} class="carousel-caption d-none d-md-block">
      <h3 id="heading"><b>Sea Food</b></h3>
    <p id="heading"><b>Juicy and healthy fish meat filled with nutrition. It has cut nicely with a tsp of cold breeze</b></p>
    <p id="heading">Rohu, Mahaseer, Trout, Finger Fish, Crabs, squids</p>
    </div></Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        );

}
export default Slide;