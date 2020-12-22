import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import history from './history';
const App = () => {
	return (
		<>
			<Router history={history}>
				{/* <NavBar /> */}
				<Switch>
					<Route component={Login} exact path='/login' />
					<Route component={Signup} exact path='/signup' />
					<Route component={Landing} restricted={false} exact path='/' />
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
