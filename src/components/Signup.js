import React from 'react';
import SignupSVG from '../svg/SignupSVG';
const Signup = () => {
	return (
		<div className='auth-container'>
			<div className='left-div'>
				<h1>Get Started</h1>
				<form>
					<label htmlFor='name'>Name:</label>
					<input type='text' id='name' required placeholder='Name' />

					<label htmlFor='email'>Email:</label>
					<input type='email' id='email' required placeholder='Email' />

					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						required
						placeholder='Password'
					/>
					<div className='buttons-container'>
						<button>Sign up</button>
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

export default Signup;
