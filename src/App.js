import React, { Component } from 'react';
import UsersList from './UsersList';
import LogInForm from './LogInForm';
import RegistrationForm from './RegistrationForm';
import Welcome from './Welcome';



class App extends Component {
	render() {
    	return (
			<div>
				<Welcome />
				<RegistrationForm />
				<LogInForm />
				<UsersList />
			</div>
		);
	}
}

export default App;
