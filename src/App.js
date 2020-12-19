import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
	return (
		<>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
