import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import UsersList from './UsersList';
import LogInForm from './LogInForm';
import RegistrationForm from './RegistrationForm';
import Welcome from './Welcome';


ReactDOM.render(
				<Router>
					<div>
						<Route path="/" component={Welcome}/>
						<Route path="/registration" component={RegistrationForm}/>
						<Route path="/login" component={LogInForm}/>
						<Route path="/users" component={UsersList}/>
					</div>
				</Router>
				,document.getElementById('root')
				);

