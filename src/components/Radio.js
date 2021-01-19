import React from 'react';
const Radio = ({ name, available, id, onChange }) => {
	return (
		<div className='option'>
			<p>{name} Available?</p>
			<>
				<input
					type='radio'
					name={id}
					id={`${id}_yes`}
					checked={available}
					value={true}
					onChange={onChange}
				/>
				<label htmlFor={`${id}_yes`}>Yes</label>
			</>
			<>
				<input
					type='radio'
					name={id}
					id={`${id}_no`}
					checked={!available}
					value={false}
					onChange={onChange}
				/>
				<label htmlFor={`${name.toLowerCase()}_yes`}>No</label>
			</>
		</div>
	);
};

export default Radio;
