import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
const RoomDetails = ({ match, room: { bedspace } }) => {
	return (
		<div className='dashboard-container'>
			<h1>{bedspace} in a room</h1>
			<hr />
			<h2>Facilities</h2>
			<ul></ul>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	if (state.firestore.ordered.hostels) {
		return {
			room:
				state.firestore.ordered.hostels[0].rooms[
					ownProps.match.params.roomNumber
				],
		};
	}
	return {};
};

export default compose(
	connect(mapStateToProps, {}),
	firestoreConnect((ownProps) => [
		{
			collection: 'hostels',
			doc: ownProps.match.params.id,
		},
	])
)(RoomDetails);
