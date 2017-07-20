import React, { Component } from 'react';


class User extends Component {
	render() {
		return (
			<div className="row">
				<p className="col-md-3">{this.props.name}</p>
				<p className="col-md-3">Email: {this.props.email}</p>
				<p className="col-md-3">Phone: {this.props.phone}</p>
			</div>

		);
	}
}

export default User;