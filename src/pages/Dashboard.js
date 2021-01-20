import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import HostelList from '../components/HostelList';

const Dashboard = ({ isVerified }) => {
	useEffect(() => {
		if (!isVerified) {
			history.push('/verify');
		}
	}, [isVerified]);

	return (
		<>
			<div className='dashboard-container'>
				<HostelList />
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	isVerified: state.firebase.auth.emailVerified,
});

export default connect(mapStateToProps, null)(Dashboard);
