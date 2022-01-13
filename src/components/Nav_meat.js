import React from "react";
import { Link } from "react-router-dom";
const Nav_meat=()=>{
    return(
        <div >
        <nav id="NavMain" class="navbar navbar-expand-lg navbar-light" >
            <div class="container-fluid">
             <Link to="/Home_meat" style={{ textDecoration:'inherit'}}> <a id="NavDesign" style={{color:'white'}} class="navbar-brand ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" href="#">Meet some Meat</a> </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li id="NavDesign" class="nav-item" style={{marginLeft:6}}>
                  <Link to="/about" style={{ textDecoration:'inherit'}}>  <a style={{color:'white'}} class="nav-link ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" href="#">About us</a></Link>
                  </li>
                  <li id="NavDesign" class="nav-item" style={{marginLeft:8}}>
                   <Link to="/login" style={{ textDecoration:'inherit'}}> <a style={{color:'white'}} class="nav-link ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" href="#">Login</a></Link>
                  </li>
                  <Link to='/signup' style={{ textDecoration:'inherit'}}><li id="NavDesign" class="nav-item" style={{marginLeft:8}}>
                    <a style={{color:'white'}} class="nav-link ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" href="#">Sign up</a>
                  </li></Link>
                  <Link to="/calory" style={{ textDecoration:'inherit'}}><li id="NavDesign" class="nav-item" style={{marginLeft:10}}>
                    <a style={{color:'white'}} class="nav-link ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" href="#">Calory Saving meet swaps</a>
                  </li></Link>
                  <Link to="/Cart" style={{ textDecoration:'inherit'}}> <li id="NavDesign" class="nav-item" style={{marginLeft:4, marginRight:3}}>
                    <a style={{color:'white'}} class="nav-link active ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" aria-current="page" href="#">Cart</a>
                  </li></Link>
                  <Link to="/ViewCustomer" style={{ textDecoration:'inherit'}}> <li id="NavDesign" class="nav-item" style={{marginLeft:4, marginRight:3}}>
                    <a style={{color:'white'}} class="nav-link active ms-lg-5 ms-md-5 ms-xl-5 ms-xxl-5" aria-current="page" href="#">Profile</a>
                  </li></Link>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-4 me-lg-4 me-md-4 me-xl-4 me-xxl-4" type="search" placeholder="Search" aria-label="Search"/>
                  <button  id="but" class="btn btn-dark me-5 me-lg-5 me-md-5 me-xl-5 me-xxl-5" type="submit">Search</button>
                </form>
                
              </div>
            </div>
          </nav>
          </div>
    )
}
export default Nav_meat ;

