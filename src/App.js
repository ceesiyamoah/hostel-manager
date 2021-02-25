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
import HostelDetails from './components/HostelDetails';
import AddRoom from './components/AddRoom';
import RoomDetails from './components/RoomDetails';
import HostelEdit from './components/HostelEdit';
import HostelsList from './components/HostelsList';
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
						path='/managershostel/addhostel'
					/>
					<PrivateRoute
						component={HostelEdit}
						restricted
						exact
						path='/managershostel/edithostel/:manager/:id'
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
					<PrivateRoute
						component={HostelDetails}
						restricted
						exact
						path='/managerhostels/:manager/:id'
					/>
					<PrivateRoute
						component={AddRoom}
						restricted
						exact
						path='/managerhostels/addRoom/:manager/:id'
					/>
					<PrivateRoute
						component={RoomDetails}
						restricted
						exact
						path='/managerhostels/:manager/:id/:roomNumber'
					/>
					<PrivateRoute
						component={HostelsList}
						restricted
						exact
						path='/allHostels'
					/>
				</Switch>
			</Router>
		</>
	);
};

export default App;
