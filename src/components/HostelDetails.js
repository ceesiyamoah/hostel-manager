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
	console.log(hostel);
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
							<ul>
								{hostel.generator && <li>Generator</li>}
								{hostel.library && <li>Library</li>}
								{hostel.studyRoom && <li>Study Room</li>}
								{hostel.wifi && <li>Wi-fi</li>}
								{hostel.security && <li>Security</li>}
								{hostel.parkingSpace && <li>Parking Space</li>}
								{hostel.recreationalSpace && <li>Recreational Space</li>}
								{hostel.tvRoom && <li>TV Room</li>}
							</ul>
						</>
						<>
							{hostel.rooms && (
								<div className='rooms'>
									{hostel.rooms.map((room, index) => (
										<div className='room'>
											<img src={room.pictures[0]} alt='room' />
											<div className='textholder'>
												<span>{room.bedspace} in a room</span>
												<span>
													Price: Gh¢
													{Number(room.priceperbed).toFixed(2)}
												</span>
												<button
													onClick={() => {
														history.push(
															`/managerhostels/${manager}/${id}/${index}`
														);
													}}
												>
													View
												</button>
											</div>
										</div>
									))}
								</div>
							)}
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
		const roomCount = hostel[0].rooms.length;
		console.log(roomCount);

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
