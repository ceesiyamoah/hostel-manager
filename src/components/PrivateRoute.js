import React from 'react';
import { Redirect, Route } from 'react-router';
import app from './../firebase';

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
	return (
		<Route
			render={(props) =>
				//TODO change 2>3 to the function that checks that a user is logged in
				app.auth().onAuthStateChanged((user) => user) ? (
					<Component {...props} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	);
};

export default PrivateRoute;
