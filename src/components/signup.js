import React, { Component } from "react";
import {Link} from "react-router-dom";
import { addCustomer } from "../Service/api";
import Nav_meat from "./Nav_meat";
import { useState } from "react";
export const SignUp=()=>{
    const [ApplicantInfo,setApplicantInfo] =useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
    });
    const { FirstName, LastName, Email, Password}=ApplicantInfo;

    const handleChange=(e)=>{
        setApplicantInfo({...ApplicantInfo, [e.target.name]: [e.target.value]});
    }

    const addDetails= async (e)=>{
        e.preventDefault();
        await addCustomer(ApplicantInfo);
    }
        return (
            <div id="back">
                <Nav_meat/>
            <form style={{marginTop:20,marginLeft:500}}>
            <br></br>
            <br></br>
            <br></br>

                <h3 style={{color:"white"}}>Sign Up</h3>

                <div style={{color:"white"}} className="form-group col-5">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="FirstName" 
                    onChange={(e)=>handleChange(e)} />
                </div>

                <div style={{color:"white"}} className="form-group col-5">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="LastName"
                     onChange={(e)=>handleChange(e)} />
                </div>

                <div style={{color:"white"}} className="form-group col-5">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="Email" 
                    onChange={(e)=>handleChange(e)} />
                </div>

                <div style={{color:"white"}} className="form-group col-5">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="Password" 
                    onChange={(e)=>handleChange(e)} />
                </div>

                <button style={{marginTop:20, marginLeft:50}} type="submit" className="btn btn-primary btn-block col-3" onClick={(e) => addDetails(e)}>Sign Up</button>
                <p style={{color:"white",marginTop:20, marginLeft:50}} className="forgot-password text-right">
                    Already registered? <Link to='/Login'> <a href="#">  sign in</a></Link>
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </form>
            </div>
            
        );
    
}

export default SignUp;