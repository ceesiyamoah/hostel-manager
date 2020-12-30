import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addHostel } from './../actions/managerHostelsActions';

const initialState = {
	hostelName: '',
	numOfBuildings: 0,
	numOfFloors: 0,
	numOfRoomsPerFloor: 0,
};
const AddHostel = ({ addHostel }) => {
	const [hostelDetails, setHostelDetails] = useState(initialState);
	const [error, setError] = useState('');

	const handleChange = (e) => {
		if (e.target.type === 'number') {
			setHostelDetails({ ...hostelDetails, [e.target.id]: +e.target.value });
		} else {
			setHostelDetails({ ...hostelDetails, [e.target.id]: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const {
			hostelName,
			numOfBuildings,
			numOfFloors,
			numOfRoomsPerFloor,
		} = hostelDetails;
		if (hostelName || numOfBuildings || numOfFloors || numOfRoomsPerFloor) {
			//post to firebase
			addHostel(hostelDetails);

			setHostelDetails(initialState);
		} else {
			setError('Please fill in the appropriate details');
			setTimeout(() => {
				setError('');
			}, 5000);
		}
	};

	return (
		<div className='dashboard-container hostelform'>
			<form onSubmit={handleSubmit}>
				<h1>Hostel Details</h1>
				<div>
					<label htmlFor='hostelName'>Hostel Name:</label>
					<input
						type='text'
						id='hostelName'
						onChange={handleChange}
						value={hostelDetails.hostelName}
					/>
				</div>
				<div>
					<label htmlFor='numOfBuildings'>Number of Buildings</label>
					<input
						type='number'
						id='numOfBuildings'
						onChange={handleChange}
						value={+hostelDetails.numOfBuildings}
						min={0}
					/>
				</div>
				<div>
					<label htmlFor='numOfFloors'>Number of floors</label>
					<input
						type='number'
						id='numOfFloors'
						min={0}
						onChange={handleChange}
						value={+hostelDetails.numOfFloors}
					/>
				</div>
				<div>
					<label htmlFor='numOfRoomsPerFloor'>Number of rooms per floor</label>
					<input
						type='number'
						id='numOfRoomsPerFloor'
						min={0}
						onChange={handleChange}
						value={+hostelDetails.numOfRoomsPerFloor}
					/>
				</div>
				{error && <span style={{ color: 'red' }}>{error}</span>}
				<button type='submit'>Submit hostel</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	addHostel,
};

export default connect(null, mapDispatchToProps)(AddHostel);
