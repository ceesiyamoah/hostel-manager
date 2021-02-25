import React, { useState } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import history from '../history';
import Input from '../Input';
import { ammenties } from './../constants/index';
const HostelList = ({ hostels, uid }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [availableAmmenities, setAvailableAmmenities] = useState({
		library: false,
		studyRoom: false,
		wifi: false,
		security: false,
		parkingSpace: false,
		recreationalSpace: false,
		tvRoom: false,
	});

	if (!hostels) {
		return (
			<>
				<h1>Add hostels</h1>
				<button onClick={() => history.push('/addhostel')}>Add hostel</button>
			</>
		);
	}
	return (
		<>
			<Input
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
				type='text'
				id='hostelSearch'
				placeholder='Search for hostel, location'
				style={{ width: '98%', margin: '10px', padding: '5px' }}
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '5px',
				}}
			>
				{ammenties.map((item) => (
					<div key={item.id}>
						<label htmlFor={item.id} style={{ marginRight: '5px' }}>
							{item.name}
						</label>
						<input
							type='checkbox'
							checked={availableAmmenities[item.id]}
							id={item.id}
							onChange={(e) =>
								setAvailableAmmenities({
									...availableAmmenities,
									[item.id]: e.target.checked,
								})
							}
						/>
					</div>
				))}
			</div>
			<div className='hostelList'>
				{hostels
					.filter(
						(item) =>
							item.hostelName
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) ||
							item.location.toLowerCase().includes(searchTerm.toLowerCase())
					)
					.filter((item) =>
						!availableAmmenities.generator ? true : item.generator
					)
					.filter((item) =>
						!availableAmmenities.library ? true : item.library
					)
					.filter((item) =>
						!availableAmmenities.studyRoom ? true : item.studyRoom
					)
					.filter((item) => (!availableAmmenities.wifi ? true : item.wifi))
					.filter((item) =>
						!availableAmmenities.security ? true : item.security
					)
					.filter((item) =>
						!availableAmmenities.parkingSpace ? true : item.parkingSpace
					)
					.filter((item) =>
						!availableAmmenities.recreationalSpace
							? true
							: item.recreationalSpace
					)
					.filter((item) => (!availableAmmenities.tvRoom ? true : item.tvRoom))
					.map(({ id, pictures, location, rooms, hostelName, ...rest }) => {
						//TODO display no hostel found when an empty array is returned
						return (
							<div className='hostel' key={id}>
								<img src={pictures[0]} alt={hostelName} />
								<h3>Name: {hostelName}</h3>
								<span>Location:{location}</span>
								<span>Types of rooms:{rooms.length}</span>

								<button
									onClick={() => history.push(`managerhostels/${uid}/${id}`)}
								>
									View
								</button>
							</div>
						);
					})}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	const hostels = state.firestore.ordered.hostels;
	console.log(hostels);
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
		},
	])
)(HostelList);
