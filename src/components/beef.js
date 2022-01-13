import React from "react";
import chicken from "../image/chicken.jpg";
import paya from "../image/paya.jpg";
import Nav_meat from "./Nav_meat";
import Card_meat from "./card_meat";
import mutton1 from "../image/mutton1.jpeg";
import chops from "../image/chops.jpeg";
import raan from "../image/raan.jpg";
import beef_cubes from "../image/beef_cubes.jpg";
class Mutton extends React.Component {
    state={
        choices:[
         {
            id:1,
            im:mutton1,
            ti:'Rs 400',
            txt:"Mutton Mix",
            am:"1 kg",
            bu:"Add to Cart",
         },
         {
            id:2,
            im:chops,
            ti:'Rs 1550',
            txt:"Mutton Chops",
            am:"900 gm",
            bu:"Add to Cart",
         },
         {
            id:3,
            im:raan,
            ti:'Rs 1599',
            txt:"Mutton Full Raan",
            am:"1 leg",
            bu:"Add to Cart",
         },
         {
            id:4,
            im:paya,
            ti:'Rs 1200',
            txt:"Mutton Full Raan",
            am:"4 feet",
            bu:"Add to Cart",
         }
    ]
    }
    render(){
    return( 
        <div id="back2" >
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
        </div>
    );
}
}
export default Mutton;