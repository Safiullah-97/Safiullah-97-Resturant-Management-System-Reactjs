import React from 'react'
import img from './img/wave.png'
import img1 from './img/mobile.svg'
import img2 from './img/avatar.svg'
import {Link} from 'react-router-dom'



function Login() {

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
		<img class="wave" src={img} alt=""/>
		<div class="container">
			<div class="img">
			<img src={img1} alt=""/>
			</div>
			
			<div class="login-content">
				<form id="form" action='/register' onClick={handleClick} style={{width: "360px"}}>
				<img src={img2} alt=""/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
           		   		<input id= "username" type="text" class="input"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input id= "password" type="password" class="input" />
				   </div>  
            	</div>
            	<Link to="/login" style={{float: 'right', marginBottom: '10px'}}>Forget Password?</Link>
			
            	<input type="submit" class="btn1" value="Login"/>
				<button class="btn2" id="sign-up" onClick='/register'>
					Create New Account
				</button>
			</form>
		</div>
		</div>
	</div>
  )
}
export default Login;