import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Carousel from './Carousel';
const RoomDetails = ({ match, room }) => {
	return (
		<div className='dashboard-container'>
			<div className='hosteldetailsheader'>
				<h1>{room.bedspace} in a room</h1>
				<div className='detailsbuttons'>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
			<hr />
			<Carousel images={room.pictures} />
			<hr />

			<h2>Price per bed: Gh¢{Number(room.priceperbed).toFixed(2)}</h2>
			<h2>Facilities</h2>

			<ul>
				{room.washroom && <li>Washroom</li>}
				{room.kitchen && <li>Kitchen</li>}
				{room.airconditioner && <li>Air-conditioner</li>}
				{room.balcony && <li>Balcony</li>}
				{room.refridgerator && <li>Refridgerator</li>}
				{room.personalelectricitymeter && <li>Personal Electricity meter</li>}
			</ul>
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
