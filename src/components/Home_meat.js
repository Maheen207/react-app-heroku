import React from "react";
import Nav_meat from "./Nav_meat";
import picture from "../image/background.jpg";
import Slide from "./slide";
import Footer from "./bottom";
const Home_meat=()=>{
    return(
        <div id="back">
             <div>
            <Nav_meat/>
            </div>
             {/* <div style={{marginTop:150}}>
            <h2 id="NavDesign" style={{color:'white'}}>Meet Some Meat</h2>
           
            </div>   */}
            
            <div style={{height:400, width:750, marginTop:50, marginRight:300,marginLeft:300,marginBottom:40}}>
        <Slide/>
        </div>
        <h2 id="heading" style={{color:'white', marginLeft:330,marginBottom:15}}>Which nutritious Richness would you Like to Enjoy?</h2>
            <br></br>
            <br></br>
            <br></br>
            
            
            {/* <Nav_meat/> */}
           {/* <div>
               <Nav_meat/>
               </div>
<div><
           <h1> hey </h1>
           </div> */}
           
           </div>
        );
}
export default Home_meat;