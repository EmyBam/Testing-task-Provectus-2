import React, { Component } from 'react';
import $ from 'jquery';
import { createHashHistory } from 'history'

export const history = createHashHistory()

class LogInForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = {email: '',
					  password: '',
		}
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		let email = this.state.email.trim();
		let password = this.state.password.trim();
		if (email && password) { 
			let userLogin = {};
			let fieldsLogin = $(e.target).serializeArray(); 
			$.each(fieldsLogin, function(i, field){
					userLogin[field.name] = field.value;
				});
			console.log(userLogin);
			let returnUserRegisteres = JSON.parse(localStorage.getItem("currentUser"))
			console.log(returnUserRegisteres);
			if (returnUserRegisteres.email == userLogin.email && 
				returnUserRegisteres.password == userLogin.password) {
				this.setState({email: '', password: ''}); 
				history.push('/users');
			} else {
				alert("Login or Password doesn't exist");
			}
		} else {
			alert ("Please, fill all the fiels")
		}
	}


	render() {
		let emailIsEmpty = this.state.emailIsEmpty,
		passwordIsEmpty = this.state.passwordIsEmpty

		return (
			<div className="container">
				<div className="row row-centered">
					<div className="col-xs-6 col-centered">
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
		);
	}
}

export default LogInForm;