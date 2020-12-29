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
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './components/ResetPassword';
import AddHostel from './components/AddHostel';
const App = () => {
	return (
		<>
			<Router history={history}>
				<NavBar />
				<Switch>
					<Route component={Login} exact path='/login' />
					<Route component={Signup} exact path='/signup' />
					<Route component={Landing} exact path='/' />
					<Route component={ResetPassword} exact path='/resetpassword' />
					<PrivateRoute
						component={AddHostel}
						restricted
						exact
						path='/addhostel'
					/>
					<PrivateRoute
						component={Dashboard}
						restricted
						exact
						path='/dashboard'
					/>
					<PrivateRoute
						component={VerifyEmail}
						restricted
						exact
						path='/verify'
					/>
				</Switch>
			</Router>
		</>
	);
};

export default App;
