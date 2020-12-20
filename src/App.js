import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import { Router, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import history from './history';

const App = () => {
	return (
		<>
			<Router history={history}>
				<NavBar />
				<Switch>
					<PublicRoute
						component={Login}
						restricted={false}
						exact
						path='/login'
					/>
					<PublicRoute
						component={Signup}
						restricted={false}
						exact
						path='/signup'
					/>
					<PublicRoute component={Landing} restricted={false} exact path='/' />
					<PrivateRoute
						component={Dashboard}
						restricted={true}
						exact
						path='/dashboard'
					/>
				</Switch>
			</Router>
		</>
	);
};

export default App;
