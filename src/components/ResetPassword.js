import React, { useState } from 'react';
import resetPasswordSVG from '../svg/resetpassword.svg';
import { connect } from 'react-redux';
import { sendResetPasswordEmail } from './../actions/authActions';
import history from '../history';
const ResetPassword = ({ resetError, sendResetPasswordEmail }) => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.includes('@') && email.includes('.') && email) {
			setMessage('Please check your email for the link to reset your password');
			sendResetPasswordEmail(email);
		}
		setTimeout(() => {
			history.push('/login');
		}, 5000);
	};
	return (
		<div className='dashboard-container resetpassword'>
			<div className='content'>
				<h1>Forgot your password?</h1>

				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{resetError && <span style={{ color: 'red' }}>{resetError}</span>}
				{message ? (
					<button
						style={{
							backgroundColor: 'grey',
							color: '#bdbcbc',
							cursor: 'not-allowed',
						}}
					>
						Reset Password
					</button>
				) : (
					<button type='submit' onClick={handleSubmit}>
						Reset Password
					</button>
				)}
				{message && <span>{message}</span>}
			</div>
			<div className='image-container'>
				<img
					src={resetPasswordSVG}
					alt='Reset password svg'
					height={600}
					width={600}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	resetError: state.auth.resetPasswordError,
});

const mapDispatchToProps = {
	sendResetPasswordEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
