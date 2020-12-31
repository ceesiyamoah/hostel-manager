import React from 'react';
import { Redirect, Route } from 'react-router';
import 'firebase/auth';
import { connect } from 'react-redux';

const PrivateRoute = ({
	component: Component,
	restricted,
	authExists,
	...rest
}) => {
	console.log(rest);
	return (
		<Route
			{...rest}
			render={(props) =>
				authExists ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

export default connect(({ firebase: { auth } }) => ({
	authExists: !!auth && !!auth.uid,
}))(PrivateRoute);
