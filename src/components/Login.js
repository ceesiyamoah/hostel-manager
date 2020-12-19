import React, { useState } from 'react';
import { connect } from 'react-redux';
import loginSVG from './../svg/loginSVG.svg';
import { login } from './../actions/index';

const Login = ({ login }) => {
	const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
	const onSubmit = (e) => {
		e.preventDefault();

		console.log(loginDetails);
		login(loginDetails);
	};
	return (
		<div className='auth-container'>
			<div className='left-div'>
				<h1>Welcome Back</h1>
				<form onSubmit={onSubmit}>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						required
						placeholder='Email'
						value={loginDetails.email}
						onChange={(e) =>
							setLoginDetails({ ...loginDetails, email: e.target.value })
						}
					/>

					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						required
						placeholder='Password'
						value={loginDetails.password}
						onChange={(e) =>
							setLoginDetails({ ...loginDetails, password: e.target.value })
						}
					/>
					<div className='buttons-container'>
						<button type='submit'>Login</button>
						<button>Sign up</button>
					</div>
				</form>
			</div>
			<div className='right-div'>
				<img src={loginSVG} alt='test' height='400' width='400' />
			</div>
		</div>
	);
};

export default connect(null, { login })(Login);
