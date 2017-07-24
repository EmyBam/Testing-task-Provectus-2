import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import $ from 'jquery'; 
import User from './User';


class UsersList extends Component {
			
	constructor(props) {
		super(props);
		this.state = {data: []}
		
		this.clearLog = this.clearLog.bind(this);
	}
	
	loadUsersFromServer() {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		});
	}
	
	clearLog() {
		localStorage.removeItem("loginedUserStore");
	}

	render() {
		this.loadUsersFromServer();

		let users = [];
		$.each(this.state.data, function(index, value) {
			users.push(<div key={index}>
			<User name={value.name} email={value.email} phone={value.phone} />
			</div>);
		});

		return (
			<div>
				<div className="container">
					<div className="row welcome"> 
						<div  className="col-md-2">
							<Link to="/" className="menu">Home</Link>
							<Link to="/" className="menu" onClick={this.clearLog}>Log Out</Link>
						</div>
					</div>
					<div className="row">
						<h3 className="col-md-2">Users</h3>
					</div>
					<div className="row">
						<p className="col-md-3"><strong>Name</strong></p>
						<p className="col-md-3"><strong>Email</strong></p>
						<p className="col-md-3"><strong>Phone</strong></p>
					</div>
					<div className="row">
						{users}
					</div>
				</div>
			</div>
		)
	}
}

export default UsersList;