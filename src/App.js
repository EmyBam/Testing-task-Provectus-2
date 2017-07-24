import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch, Redirect,  withRouter } from 'react-router-dom';
import { createHashHistory } from 'history'
import UsersList from './UsersList';
import LogInForm from './LogInForm';
import RegistrationForm from './RegistrationForm';


export const history = createHashHistory()


class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.isAuthenticated = this.isAuthenticated.bind(this);
	}
		
	isAuthenticated() {
		return (JSON.parse(localStorage.getItem("loginedUserStore"))) ? true : false;
	}
	
	render() {
		
		const PrivateRoute = ({ component: UserList}) => (
			<Route render={props => (
				this.isAuthenticated() ? (
					<UserList />
				) : (
					<Redirect to={{
						pathname: '/',
						state: { from: props.location }
					}}/>
				)
			)}/>
		)
		
		
    	return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LogInForm}/>
					<Route path="/registration" component={RegistrationForm}/>
					<PrivateRoute path="/users" component={UsersList} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
