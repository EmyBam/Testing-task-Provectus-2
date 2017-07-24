import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



class LogInForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = {email: '',
					  password: '',
					  loginedUser: '', 
					 };
		
		
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.isUserExist = this.isUserExist.bind(this);
		this.isAuthenticated = this.isAuthenticated.bind(this);
  	}
	
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}

	handlePasswordChange(e) {
		this.setState({password: e.target.value});
	}
		
	handleConfirmPasswordChange(e) {
		this.setState({confirmPassword: e.target.value});
	}
	
	handleSubmit(e) {
		e.preventDefault();
		if(this.isUserExist(e)) {
			console.log("Users authenticated");
			this.setState({email: '', password: ''}); 
			this.props.history.push('/users')
		}
	}
	
	isUserExist(e) {
		e.preventDefault();
		let email = this.state.email.trim();
		let password = this.state.password.trim();
		if (email && password) { 
			
			let loginedUser = {};
			let fieldsLogin = $(e.target).serializeArray(); 
			$.each(fieldsLogin, function(i, field){
					loginedUser[field.name] = field.value;
				});
			let serialLoginedUser = JSON.stringify(loginedUser);
			console.log("Logined user" + serialLoginedUser);
			
			let registeredUser;
			if (!JSON.parse(localStorage.getItem("registeredUserStore"))) {
				registeredUser = {}; 
			} else {
				registeredUser = JSON.parse(localStorage.getItem("registeredUserStore"));
			}
			
			if (registeredUser.email == loginedUser.email && 
				registeredUser.password == loginedUser.password) {
					localStorage.setItem("loginedUserStore", serialLoginedUser);
					return true;
				} else {
					alert("Login or Password doesn't exist");
				}

		} else {
			alert ("Please, fill all the fiels")
		}
	}
	
	isAuthenticated() {
		return (JSON.parse(localStorage.getItem("loginedUserStore"))) ? true : false;
	}
	
	render() {
		
		return (
			<div>
				<div className="container">
					<div className="row welcome">
						<div  className="col-md-1">
							<Link to="/registration" className="menu">Registration</Link> 
						</div>
					</div>		
					<div className="row">
						<div className="col-md-4">
							<form onSubmit={this.handleSubmit}>
								<h3>Login</h3>
								<input
									type='email'
									className="form-control"
									name="email"
									placeholder='Email'
									value={this.state.email}
									onChange={this.handleEmailChange}
								/>
								<input
									type='password'
									className="form-control"
									name="password"
									placeholder='Password'
									value={this.state.password}
									onChange={this.handlePasswordChange}
								/>
								<button 
									type="submit"
									className="btn btn-default"
								>Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LogInForm;