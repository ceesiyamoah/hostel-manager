import React from 'react';
import { roomFacilities } from '../constants';
import Radio from './Radio';
import { roomInitialState } from './../constants/index';
import { connect } from 'react-redux';
import { addRoomToHostel } from './../actions/managerHostelsActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
const AddRoom = ({ match: { params }, addRoomToHostel }) => {
	const [roomDetails, setFacilities] = React.useState(roomInitialState);
	const handleChange = (e) => {
		const { value, id, type } = e.target;
		console.log(value, id, type);
		if (type === 'radio') {
			const editedID = id.split('_')[0];
			setFacilities({
				...roomDetails,
				[editedID]: value === 'true',
			});
		}
		if (type === 'number') {
			setFacilities({ ...roomDetails, [id]: value });
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addRoomToHostel(params, roomDetails);
	};
	return (
		<div className='dashboard-container'>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='bedspace'>Bedspaces:</label>
					<input
						type='number'
						min='0'
						id='bedspace'
						placeholder='Bed Spaces'
						value={roomDetails.bedspace}
						onChange={handleChange}
						required
					/>
					<label htmlFor='price'>Price:</label>
					<input
						type='number'
						min='0'
						id='priceperbed'
						placeholder='Price'
						value={roomDetails.price}
						onChange={handleChange}
						required
					/>
				</div>
				<>
					{roomFacilities.map((item) => {
						const editedName = item.split(' ').join('').toLowerCase();

						return (
							<Radio
								key={item}
								name={item}
								available={roomDetails[editedName]}
								onChange={handleChange}
								id={item.split(' ').join('').toLowerCase()}
							/>
						);
					})}
				</>
				<button type='submit'>Add room</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state.firestore.ordered.hostels?.[0]);
	// if (state.firestore.ordered.hostels[0]?.rooms) {
	// 	const roomCount = state.firestore.ordered.hostels[0];
	// 	console.log(roomCount);
	// }

	return {};
};

export default compose(
	connect(mapStateToProps, { addRoomToHostel }),
	firestoreConnect((ownProps) => [
		{
			collection: 'hostels',
			doc: ownProps.match.params.id,
		},
	])
)(AddRoom);
