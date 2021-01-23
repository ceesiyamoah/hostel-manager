import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Carousel from './Carousel';
import history from '../history';
const HostelDetails = ({
	match: {
		params: { manager, id },
	},
	hostel,
}) => {
	if (hostel) {
		return (
			<div className='dashboard-container'>
				<div className='hosteldetailsheader'>
					<h1>{hostel.hostelName} hostel</h1>
					<div className='detailsbuttons'>
						<button
							onClick={() => {
								history.push(`/managerhostels/addRoom/${manager}/${id}`);
							}}
						>
							Add room
						</button>
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>
				<hr />
				<div className='hosteldetailcontainer'>
					<Carousel images={hostel.pictures} />
					<hr />
					<div className='hosteltext'>
						<span>
							<b>Description</b>:{hostel.description}
						</span>
						<hr />
						<>
							<h3>Ammenities</h3>
						</>
					</div>
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
