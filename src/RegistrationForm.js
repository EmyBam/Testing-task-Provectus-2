import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Redirect, Link, history} from 'react-router-dom';
import $ from 'jquery';


class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '',
					  password: '',
					  confirmPassword: ''
		}
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
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
	
	static contextTypes = {
    	router: PropTypes.object
	}

	handleSubmit(e) {
		e.preventDefault();
		let email = this.state.email.trim();
		let password = this.state.password.trim();
		let confirmPassword = this.state.confirmPassword.trim();
		if (password !== confirmPassword) {
			alert("Passwords don't match")
			
		} else if (!email || !password || !confirmPassword) {
			alert("Please, fill all the fields");
		} else {
			let registeredUser = {};
			let fieldsRegistration = $(e.target).serializeArray(); 
				$.each(fieldsRegistration, function(i, field){
					registeredUser[field.name] = field.value;
				});
			
			let serialRegisteredUser = JSON.stringify(registeredUser);
			localStorage.setItem("registeredUserStore", serialRegisteredUser); 
			console.log("New user" + serialRegisteredUser);
			
			this.setState({email: '', password: '', confirmPassword: ''}); 			
			this.props.history.push('/')
		}
	}


	render() {
		return (
			<div className="container">
				<div className="row welcome">
					<div className="col-md-1">
						<Link to="/" className="menu">Log In</Link> 
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<form onSubmit={this.handleSubmit}>
							<h3>Registration</h3>
							<input 
								type='email'
								className="form-control"	
								name='email'
								value={this.state.email}
								placeholder='Email'
								onChange={this.handleEmailChange}
							/>
							<input
								type='password'
								className="form-control"
								name='password'
								value={this.state.password}
								placeholder='Password'
								onChange={this.handlePasswordChange}
							/>
							<input
								type='password'
								className="form-control"
								name='password'
								value={this.state.confirmPassword}
								placeholder='Confirm Password'
								onChange={this.handleConfirmPasswordChange}
							/>
							<button 
								to="/login"
								type="submit"
								className="btn btn-default"
							>Registration</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default RegistrationForm;