import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import history from '../history';
const HostelList = ({ hostels, uid }) => {
	if (!hostels) {
		return (
			<>
				<h1>Add hostels</h1>
				<button onClick={() => history.push('/addhostel')}>Add hostel</button>
			</>
		);
	}
	return (
		<div className='hostelList'>
			{hostels.map(({ id, pictures, location, rooms, hostelName, ...rest }) => {
				console.log(rest);
				return (
					<div className='hostel' key={id}>
						<img src={pictures[0]} alt={hostelName} />
						<h3>Name: {hostelName}</h3>
						<span>Location:{location}</span>
						<span>Types of rooms:{rooms.length}</span>

						<button onClick={() => history.push(`managerhostels/${uid}/${id}`)}>
							View
						</button>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	const hostels = state.firestore.ordered.hostels;
	return {
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
)(HostelList);
