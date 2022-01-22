import React from 'react'
import img from './img/wave.png'
import img1 from './img/mobile.svg'
import img2 from './img/avatar.svg'
import {Link} from 'react-router-dom'
import './css/login_register.css'

function Register() {


function handleClick() {
	
const inputs = document.querySelectorAll(".input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
}

  return (
      
<div>

<div id="status"> </div>
	<img class="wave" src={img} alt=""/>
	<div class="container">
		<div class="img">
			<img src={img1} alt=""/>
		</div>
		<div className="login-content">
			<form id="form-submit" onClick={handleClick} style={{width: "360px"}}>
				<img src={img2} alt=""/>
                <h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input" />
           		   </div>
           		</div>
                <div class="input-div one">
           		   <div className="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email Address</h5>
						<input id="email" type="Email" name="email" class="input" required/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input id="password" type="password" name="password" class="input" required/>
                    </div>
            	</div>
                <div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Confirm Password</h5>
           		    	<input id="confirm_password" type="password" class="input"/>
						<div id="checkpass"> </div>
                    </div>       
            	</div>
                <Link to="/login" style= {{float: 'right', marginTop: '15px'}}> Already Registered? Login </Link>
                            	
                <input id="reg" type="submit" class="btn1" formmethod="POST" value="Register"/>
            </form>
        </div>
		
    </div>
	
    </div>

  )}
export default Register;