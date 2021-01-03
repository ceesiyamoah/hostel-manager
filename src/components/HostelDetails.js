import React from 'react';
import { connect } from 'react-redux';
const HostelDetails = ({ match, hostel }) => {
	console.log(match.params.id);
	return <div className='dashboard-container'>fkdls</div>;
};

const mapStateToProps = (state, ownProps) => {
	console.log(state.firestore);
	return {
		hostel: state,
	};
};

export default connect(mapStateToProps, null)(HostelDetails);
