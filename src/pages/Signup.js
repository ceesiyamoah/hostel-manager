import React, { useEffect, useState } from 'react';
import SignupSVG from '../svg/SignupSVG';
import { connect } from 'react-redux';
import history from '../history';
// import { signup } from '../actions/authActions';
//! Add error message
const Signup = ({ signup, errorMessage, uid }) => {
	const [signupDetails, setSignupDetails] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		//signup(signupDetails);
	};

	useEffect(() => {
		if (uid) history.push('/dashboard');
	}, [uid]);
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
					{/* {errorMessage && (
						<span className='error-message'>{errorMessage}</span>
					)} */}
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

const mapStateToProps = (state) => ({
	errorMessage: state.auth.errorMessage,
	uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps, {})(Signup);
