import React from 'react';
const Input = ({ name, type, ...rest }) => {
	const nameForClass = name.split(' ').join('').toLowerCase();

	return (
		<div>
			<label htmlFor={nameForClass}>{name}:</label>
			<input
				type={type || 'text'}
				id={nameForClass}
				placeholder={name}
				{...rest}
			/>
		</div>
	);
};

export default Input;
