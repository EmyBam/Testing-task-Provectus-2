import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LogInForm from './LogInForm';
import RegistrationForm from './RegistrationForm';


class Welcome extends Component {
	render() {
    	return (
			<div className="container">
				<div className="row welcome">
					<Link to="/registration" className="col-md-1"><p>Registration</p></Link> 
					<Link to="/login" className="col-md-1"><p>Login</p></Link>
					<Link to="/users" className="col-md-1"><p>Users</p></Link>
				</div>
			</div>
		);
	}
}

export default Welcome;