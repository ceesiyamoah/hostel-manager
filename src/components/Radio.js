import React from 'react';
const Radio = ({ name }) => {
	const nameForClass = name.split(' ').join('').toLowerCase();
	return (
		<div className='option'>
			<p>{name} Available?</p>
			<>
				<input type='radio' name={nameForClass} id={`${nameForClass}_yes`} />
				<label htmlFor={`${nameForClass}_yes`}>Yes</label>
			</>
			<>
				<input type='radio' name={nameForClass} id={`${nameForClass}_no`} />
				<label htmlFor={`${name.toLowerCase()}_yes`}>No</label>
			</>
		</div>
	);
};

export default Radio;
