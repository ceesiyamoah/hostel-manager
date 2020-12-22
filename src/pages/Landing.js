import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../history';
const Landing = ({ uid }) => {
	useEffect(() => {
		if (uid) history.push('/dashboard');
	});
	return (
		<div className='landing'>
			<div className='left-div'>
				<h3>Market Place for hostels</h3>
				<h1 className='big-title'>Connecting students to their next hostels</h1>
				<div className='button-container'>
					<button>Manager</button>
					<button>Student</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps, null)(Landing);
