import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ammenties, hostelInitialState } from '../constants';
import Input from '../Input';
import Radio from './Radio';
import { hostelFormDetails } from './../constants/index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { editHostel } from '../actions/managerHostelsActions';
const HostelEdit = ({ hostel, match: { params } }) => {
	const [hostelDetails, setHostelDetails] = useState(hostel);

	const handleChange = (e) => {
		const { type, id, value, files, name } = e.target;
		switch (type) {
			case 'file':
				setHostelDetails({
					...hostelDetails,
					[id]: Array.from(Array(files.length).keys()).map((i) => files[i]),
				});

				break;

			case 'radio':
				setHostelDetails({
					...hostelDetails,
					[name]: value === 'true',
				});
				break;
			default:
				setHostelDetails({ ...hostelDetails, [id]: value });
				break;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//editHostel(params, hostelDetails);
	};
	if (!hostel) {
		return <div>Loading screen</div>;
	}

	return (
		<div className='dashboard-container hostelform'>
			<form onSubmit={handleSubmit}>
				<h1 style={{ textAlign: 'center' }}>Hostel Details</h1>
				{hostelFormDetails.map((item) => (
					<React.Fragment key={item.id}>
						<Input
							name={item.name}
							id={item.id}
							type={item?.type}
							multiple={item?.multiple}
							accept={item?.accept}
							required={
								item?.type === 'file' && hostelDetails?.pictures.length > 0
									? false
									: true
							}
							value={item?.type === 'file' ? undefined : hostelDetails[item.id]}
							onChange={handleChange}
						/>
					</React.Fragment>
				))}
				<hr />
				<h3 style={{ textAlign: 'center' }}>Ammenties</h3>
				<div className='ammenties'>
					{ammenties.map(({ name, id }) => (
						<Radio
							name={name}
							key={id}
							id={id}
							available={hostelDetails[id]}
							onChange={handleChange}
						/>
					))}
				</div>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	if (state.firestore.ordered.hostels) {
		return {
			hostel: state.firestore.ordered.hostels.filter(
				(item) => item.id === ownProps.match.params.id
			)[0],
		};
	}
	return {};
};

export default compose(
	connect(mapStateToProps, { editHostel }),
	firestoreConnect((ownProps) => [
		{
			collection: 'hostels',
			where: ['authorId', '==', ownProps.match.params.manager],
		},
	])
)(HostelEdit);
