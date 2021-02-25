import React from 'react';
const Input = ({ name, id, onChange, type, ...rest }) => {
	return (
		<div>
			{name && <label htmlFor={id}>{name}:</label>}
			{type === 'textarea' ? (
				<textarea placeholder={name} id={id} {...rest} onChange={onChange} />
			) : (
				<input
					type={type || 'text'}
					placeholder={name}
					id={id}
					{...rest}
					onChange={onChange}
				/>
			)}
		</div>
	);
};

export default Input;
