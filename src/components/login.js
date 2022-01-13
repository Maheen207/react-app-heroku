import React from 'react';
import Nav_meat from './Nav_meat';
export default function Login() {
  return(
    <div id="back">
        <Nav_meat/>
    <div className="login-wrapper">
    
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <h1 id="heading" style={{marginBottom:90, color:'white'}}>MEET SOME MEAT</h1>
      
      <form className='row' style={{marginLeft:190}}>
      <div style={{color:'white', marginBottom:20}} >
          <div className='col-4'>
        <label class="text-center">
          <p>Username:</p>
          </label>
          </div>
          <div >
          <input className='col-8' type="text" />
        </div>
        </div>
        <div style={{color:'white',marginBottom:70}} className='col-12'>
        <div className='col-4'>
        <label>
          <p>Password:</p>
          </label>
          </div>
        <div >
          <input className='col-8' type="password" />
       </div>
       </div>
        <div style={{marginLeft:120}}>
          <button style={{color:"white"}} className='col-3' id="but2" type="submit"> Login</button>
        </div>
        
      </form>
      <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
    </div>
  )
}