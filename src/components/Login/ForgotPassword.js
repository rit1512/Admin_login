import React, { Component } from 'react'
import './Login.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';

export class ForgotPassword extends Component {
    // constructor(props)
	// {
	// 	super(props);
	// 	this.state = {
	// 	ui_user_name : "",
	// 	ui_password: "",
	// 	redirect: false,
	// 	tokentext: "",
	// 	tokenlength : ""
			  
	// 	}	
		
	// }

	// change = e => 
	// {
	//  this.setState({
	// 	 [e.target.name] : e.target.value,

	//  })
	// }
	
	// onSubmit = e =>
	// {
		
	// 	e.preventDefault();
	// 	this.setState({
	// 	ui_user_name : "",
	// 	ui_password: ""
	// 	})
	// 	//console.log(this.state);
			
	
	// 	axios.post(`${API_URL}company/login`, this.state)
	// 	//   .then(console.log(this.state));
	// 	.then(function(response){ 
	// 		console.log(response.data);
	// 		//console.log(response.data.tokenKey)
	// 	const tokentext = response.data.tokenKey
	// 	localStorage.setItem('tokenKey', tokentext);
	// 	//console.log(tokentext)
	// 	if(response.data.success){
	// 		this.props.onRouteChange('home');
	// 		return <Redirect to={{pathname: '/'}} />
	// 	}
	// 	console.log('authservice gettoke')
	// 		alert(response.data.msg)
	// 	//console.log(authService.getToken())
	// 	 }.bind(this))
	//   .catch(error => {
	// 		console.log(error);
	// 	})
	
		
	// }
  render() {
    const onRouteChange = this.props.onRouteChange;
    return (
      
        <div>
        <div class="my-login-page">
<section class="h-100">
 <div class="container h-100">
     <div class="row justify-content-md-center h-100">
         <div class="card-wrapper">
             <div class="card fat custom-card-margin">
                 <div class="card-body">
                     <h4 class="card-title">Login</h4>
                     <form method="POST">
                      
                         <div class="form-group">
                             <label for="email">Enter E - Mail </label>

                             <input id="email" type="email" class="form-control" name="ui_user_name" />
                         </div>

                         <div class="form-group no-margin">
                             <button class="btn btn-primary btn-block" >
                                 Login
                             </button>
                         </div>
                        
                     </form>
                 </div>
             </div>
         </div>
     </div>
 </div>
</section>
</div>

         
     </div>
    )
  }
}

export default ForgotPassword
