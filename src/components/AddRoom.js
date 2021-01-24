import React from 'react';
import { roomFacilities } from '../constants';
import Radio from './Radio';
import { roomInitialState } from './../constants/index';
import { connect } from 'react-redux';
import { addRoomToHostel } from './../actions/managerHostelsActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Input from './../Input';
const AddRoom = ({ match: { params }, roomCount, addRoomToHostel }) => {
	const [roomDetails, setFacilities] = React.useState(roomInitialState);
	const handleChange = (e) => {
		const { value, id, type, files } = e.target;

		switch (type) {
			case 'radio':
				const editedID = id.split('_')[0];
				setFacilities({
					...roomDetails,
					[editedID]: value === 'true',
				});

				break;
			case 'number':
				setFacilities({ ...roomDetails, [id]: value });
				break;
			case 'file':
				setFacilities({
					...roomDetails,
					pictures: Array.from(Array(files.length).keys()).map((i) => files[i]),
				});
				break;

			default:
				break;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addRoomToHostel(params, roomDetails, roomCount);
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
						value={roomDetails.priceperbed}
						onChange={handleChange}
						required
					/>
				</div>
				<Input
					name='pictures'
					id='pictures'
					type='file'
					multiple
					accept='image/*'
					required
					onChange={handleChange}
				/>
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
	if (state.firestore.ordered.hostels?.[0]) {
		return {
			roomCount: state.firestore.ordered.hostels[0].rooms.length,
		};
	}
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
