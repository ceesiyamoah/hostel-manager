import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { sendVerificationEmail } from '../actions/authActions';
import history from '../history';
import VerifySVG from './../svg/VerifySVG';

const VerifyEmail = ({ email, isVerified, sendVerificationEmail }) => {
	useEffect(() => {
		if (isVerified) history.push('/dashboard');
	});

	return (
		<div className='container verify'>
			<h1>Verify your email</h1>
			<h3>You need to verify your email to complete registration</h3>
			<VerifySVG fill='#5a33ff' height={200} width={200} />
			<span>
				An email will be sent to {email} with a link to verify your account.
				<br />
				If you do not received the email, please check your spam folder
			</span>
			<h4>Refresh the page after you verify your email</h4>

			<button onClick={sendVerificationEmail}>Send verification email</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	email: state.firebase.auth.email,
	isVerified: state.firebase.auth.emailVerified,
});

export default connect(mapStateToProps, { sendVerificationEmail })(VerifyEmail);
