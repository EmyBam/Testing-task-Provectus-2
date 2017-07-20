import React, { Component } from 'react';
import $ from 'jquery'; 
import User from './User';


class UsersList extends Component {
	
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
	
	constructor(props) {
		super(props);
		this.state = {data: []}
	}

	render() {
		this.loadUsersFromServer();

		var users = [];
		$.each(this.state.data, function(index, value) {
			users.push(<div key={index}>
			<User name={value.name} email={value.email} phone={value.phone} />
			</div>);
		});

		return (
			<div className="container">
				<div className="row">
					<h3 className="col-md-2">Users</h3>
				</div>
				<div className="row">
					<hr/>
				</div>
				{users}
			</div>
		)
	}
}

export default UsersList;