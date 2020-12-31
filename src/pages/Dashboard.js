import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import history from '../history';
import { Link } from 'react-router-dom';
const Dashboard = ({ isVerified, hostels }) => {
	useEffect(() => {
		if (!isVerified) {
			history.push('/verify');
		} else {
			console.log(hostels);
		}
	}, [isVerified, hostels]);

	return (
		<>
			<div className='dashboard-container'>
				<h1>Your hostels</h1>
				{hostels &&
					hostels.map(({ id, hostelName }) => (
						<h3 key={id}>
							<Link to={`/managerhostels/${id}`}>{hostelName}</Link>
						</h3>
					))}
			</div>
		</>
	);
};
const mapStateToProps = (state) => {
	console.log(state);
	const hostels = state.firestore.ordered.hostels;
	return {
		isVerified: state.firebase.auth.emailVerified,
		hostels: hostels,
		uid: state.firebase.auth.uid,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect((ownProps) => [
		{
			collection: 'hostels',
			where: ['authorId', '==', ownProps.uid],
		},
	])
)(Dashboard);
