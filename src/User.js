import React, { Component } from 'react';


class User extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<p className="col-md-3">{this.props.name}</p>
					<p className="col-md-3">{this.props.email}</p>
					<p className="col-md-3">{this.props.phone}</p>
				</div>
			</div>
		);
	}
}

export default User;