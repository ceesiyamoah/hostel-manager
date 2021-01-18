import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ammenties, hostelInitialState } from '../constants';
import Input from '../Input';
import { addHostel } from './../actions/managerHostelsActions';
import Radio from './Radio';
import { hostelFormDetails } from './../constants/index';

const AddHostel = ({ addHostel }) => {
	const [hostelDetails, setHostelDetails] = useState(hostelInitialState);
	const [error, setError] = useState(false);

	return (
		<div className='dashboard-container hostelform'>
			<form>
				<h1 style={{ textAlign: 'center' }}>Hostel Details</h1>
				{hostelFormDetails.map((item) => (
					<Input
						name={item.name || item}
						type={item?.type}
						multiple={item?.multiple}
						accept={item?.accept}
					/>
				))}
				<hr />
				<h3 style={{ textAlign: 'center' }}>Ammenties</h3>
				<div className='ammenties'>
					{ammenties.map((item) => (
						<Radio name={item} key={item} />
					))}
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
