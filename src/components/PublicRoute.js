import React from 'react';
import { Route, Redirect } from 'react-router';
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				//TODO add login function to the conditional
				restricted ? <Redirect to='/' /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
