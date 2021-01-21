import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Carousel from './Carousel';
const HostelDetails = ({ match, hostel, ...rest }) => {
	if (hostel) {
		return (
			<div className='dashboard-container'>
				<div className='hosteldetailsheader'>
					<h1>{hostel.hostelName}</h1>
					<div className='detailsbuttons'>
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>
				<hr />
				<div className='hosteldetailcontainer'>
					<Carousel images={hostel.pictures} />
				</div>
			</div>
		);
	}
	return null;
};

const mapStateToProps = (state, ownProps) => {
	if (state.firestore.ordered.hostels) {
		const hostel = state.firestore.ordered.hostels.filter(
			({ id }) => id === ownProps.match.params.id
		);

		return {
			hostel: hostel[0],
		};
	}
	return {};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect((ownProps) => [
		{
			collection: 'hostels',
			where: ['authorId', '==', ownProps.match.params.manager],
		},
	])
)(HostelDetails);
