import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ammenties, hostelInitialState } from '../constants';
import Input from '../Input';
import { addHostel } from './../actions/managerHostelsActions';
import Radio from './Radio';
import { hostelFormDetails } from './../constants/index';

const AddHostel = ({ addHostel }) => {
	const [hostelDetails, setHostelDetails] = useState(hostelInitialState);

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
				console.log(name, value);
				setHostelDetails({
					...hostelDetails,
					[name]: value === 'true',
				});
				//console.log(e.target.name);
				break;
			default:
				setHostelDetails({ ...hostelDetails, [id]: value });
				break;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addHostel(hostelDetails);
	};

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
							required
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
				<button type='submit'>Submit hostel</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	addHostel,
};

export default connect(null, mapDispatchToProps)(AddHostel);
