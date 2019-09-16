import React, { Component } from 'react';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../../services/url';
import authService from '../../services/auth-service';
import axiosService from '../../services/axios-service';

class AddLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_name: "",
			password: "",
			redirect: false,
			tokentext: "",
			tokenlength: ""

		}

	}

	change = e => {
		this.setState({
			[e.target.name]: e.target.value,

		})
	}

	onSubmit = e => {

		e.preventDefault();
		this.setState({
			user_name: "",
			password: ""
		})
		console.log(this.state);


		axios.post(`${API_URL}user_api/login`, this.state)
			//   console.log(this.state);
			.then(function (response) {
				console.log("addLogin --> " + response.data);
				console.log(response.data)
				const tokentext = response.data.tokenkey;
				console.log(tokentext)
				localStorage.setItem('tokenKey', tokentext);
				//console.log(tokentext)
				if (response.data.success) {
					// this.props.onRouteChange('home');
					window.location.reload('home')
					// return <Redirect to={{pathname: '/'}} />
				}
				console.log('authservice gettoke')
				alert(response.data.msg)
				//console.log(authService.getToken())
			}.bind(this))
			.catch(error => {
				console.log(error);
			})


	}
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
											<h4 class="card-title">Admin Login</h4>
											<form method="POST">

												<div class="form-group">
													<label for="email">Enter Email</label>

													<input id="email"
													 type="text" 
													 class="form-control" 
													 name="email"
													  value={this.state.email}
													   onChange={e => this.change(e)} required autofocus />
												</div>

												<div class="form-group">
													<label for="password">Password
										{/*<a href="forgot.html" class="float-right">
											Forgot Password?
										</a>*/}
													</label>
													<input id="password" type="password" class="form-control" name="password" value={this.state.password} onChange={e => this.change(e)} required data-eye />
												</div>

												{/*<div class="form-group">
									<label>
										<input type="checkbox" name="user_remember" value={this.state.user_remember} onchange={e => this.change(e)}/> Remember Me
									</label>
									</div>*/}

												<div class="form-group no-margin">
													<button class="btn btn-primary btn-block" onClick={e => this.onSubmit(e)} >
														Login
									</button>
												</div>
												{/*<div class="margin-top20 text-center">
									Don't have an account? <p onClick={() => onRouteChange('register')}>Register</p>
								</div>*/}
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>


			</div>
		);
	}
}

export default AddLogin;