import React from "react";
import chicken from "../image/chicken.jpg";
import Nav_meat from "./Nav_meat";
import Card_meat from "./card_meat";
import chicken_legs from "../image/chicken_legs.png";
import chicken_piece from "../image/chicken_piece.jpg";
import chicken_wings from "../image/chicken_wings.jpg";
import Chicken_Mince from "../image/Chicken_Mince.jpg";
class Poultry extends React.Component {
    state={
        choices:[{
            id:1,
            im:chicken_legs,
            ti:'Rs 350',
            txt:"Chicken Drum-Sticks",
            am:"500 gm",
            bu:"Add to Cart"
        },
         {
            id:2,
            im:chicken,
            ti:'Rs 400',
            txt:"Chicken Boneless Breast",
            am:"500 gm",
            bu:"Add to Cart"
        },
         {
            id:3,
            im:chicken_wings,
            ti:'Rs 340',
            txt:"Chicken wings",
            am:"500 gm",
            bu:"Add to Cart"
        },
        {
            id:4,
            im:Chicken_Mince,
            ti:'Rs 385',
            txt:"Chicken Mince",
            am:"500 gm",
            bu:"Add to Cart"
        },
        {
            id:4,
            im:chicken_piece,
            ti:'Rs 235',
            txt:"Chicken Mince",
            am:"500 gm",
            bu:"Add to Cart"
        },
    ]
    }
    render(){
    return( 
        <div id="back" >
             <div>
            <Nav_meat/>
            </div>
            <br></br>
            <br></br>
           
<div style={{display: "flex", marginTop:30}}>
{/* <img src={beef} alt="beef"/> */}
{this.state.choices.map(ch =>(
<Card_meat i={ch.im} title={ch.ti} quantity={ch.am} text={ch.txt} b={ch.bu}/>
))}
</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
}
export default Poultry;