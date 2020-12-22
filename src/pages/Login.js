import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loginSVG from './../svg/loginSVG.svg';
import { login } from '../actions/authActions';
import history from '../history';

const Login = ({ login, errorMessage, uid }) => {
	const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
	const onSubmit = (e) => {
		e.preventDefault();
		login(loginDetails);
	};

	useEffect(() => {
		if (uid) {
			history.push('/dashboard');
		}
	}, [uid]);

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
					{/* {errorMessage && (
						<span className='error-message'>{errorMessage}</span>
					)} */}
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

const mapStateToProps = (state) => ({
	errorMessage: state.auth.errorMessage,
	uid: state.firebase.auth.uid,
});

const mapDispatchToProps = {
	login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
