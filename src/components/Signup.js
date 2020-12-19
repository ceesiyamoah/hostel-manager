import React, { useState } from 'react';
import SignupSVG from '../svg/SignupSVG';
import { connect } from 'react-redux';
import { signup } from '../actions';
const Signup = ({ signup }) => {
	const [signupDetails, setSignupDetails] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		signup(signupDetails);
	};
	return (
		<div className='auth-container'>
			<div className='left-div'>
				<h1>Get Started</h1>
				<form onSubmit={onSubmit}>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						required
						placeholder='Name'
						value={signupDetails.name}
						onChange={(e) =>
							setSignupDetails({ ...signupDetails, name: e.target.value })
						}
					/>

					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						required
						placeholder='Email'
						value={signupDetails.email}
						onChange={(e) =>
							setSignupDetails({ ...signupDetails, email: e.target.value })
						}
					/>

					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						required
						placeholder='Password'
						value={signupDetails.password}
						onChange={(e) =>
							setSignupDetails({ ...signupDetails, password: e.target.value })
						}
					/>
					<div className='buttons-container'>
						<button type='submit'>Sign up</button>
						<button>Log in</button>
					</div>
				</form>
			</div>
			<div className='right-div'>
				<SignupSVG fill='#5A33FF' width='400' height='400' />
			</div>
		</div>
	);
};

export default connect(null, { signup })(Signup);
