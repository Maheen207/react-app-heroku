import React from "react";
import fish from "../image/fish.jpg"
import Nav_meat from "./Nav_meat";
import Card_meat from "./card_meat";
import Tuna from"../image/Tuna.jpg";
import salmon from "../image/salmon.jpg";
import prawn from "../image/prawn.jpg";
import { Link } from "react-router-dom";
class Fish extends React.Component {
    state={
        choices:[{
            id:1,
            im:fish,
            ti:'Rs 500',
            txt:"Rohu Fish",
            am:"700 gm",
            bu:"Add to Cart"
        },
         {
            id:2,
            im:Tuna,
            ti:'Rs 550',
            txt:"Tuna",
            am:"1 kg",
            bu:"Add to Cart"
        },
         {
            id:3,
            im:salmon,
            ti:'Rs 1200',
            txt:"Salmon",
            am:"1 kg",
            bu:"Add to Cart"
        },
      

    ],
    choices2:[
       
    {
        id:4,
        im:prawn,
        ti:'Rs 500',
        txt:"Prawns",
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
           
<div style={{display: "flex", marginTop:30, marginLeft:180}}>
{/* <img src={beef} alt="beef"/> */}
{this.state.choices.map(ch =>(
<Card_meat i={ch.im} title={ch.ti} quantity={ch.am} text={ch.txt} b={ch.bu}/>
))}
</div>
<div style={{display: "flex", marginTop:30,marginLeft:180}}>
{/* <img src={beef} alt="beef"/> */}
{this.state.choices2.map(ch =>(
<Card_meat i={ch.im} title={ch.ti} quantity={ch.am} text={ch.txt} b={ch.bu}/>
))}
</div>
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
export default Fish;