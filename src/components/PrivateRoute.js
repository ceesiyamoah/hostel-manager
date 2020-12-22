import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import firebase from 'firebase/app';
import 'firebase/auth';

//TODO fix private route, does not work with auth state

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
	useEffect(() => {}, []);

	return (
		<Route
			render={(props) =>
				true ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

export default PrivateRoute;
