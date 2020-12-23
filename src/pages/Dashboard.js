import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../history';
const Dashboard = ({ isVerified }) => {
	useEffect(() => {
		if (!isVerified) {
			history.push('/verify');
		}
	}, [isVerified]);

	return (
		<>
			<div className='dashboard-container'>
				<h1>Welcome you're logged in</h1>
				<h2>gdsa </h2>
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	isVerified: state.firebase.auth.emailVerified,
});

export default connect(mapStateToProps, null)(Dashboard);
