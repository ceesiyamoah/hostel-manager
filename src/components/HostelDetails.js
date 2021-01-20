import React from 'react';
import { connect } from 'react-redux';
const HostelDetails = ({
	match: {
		params: { id, manager },
	},
	hostel,
	...rest
}) => {
	console.log(id, manager);
	return <div className='dashboard-container'>fkdls</div>;
};

const mapStateToProps = (state, ownProps) => {
	console.log(state.firestore);
	return {
		hostel: state,
	};
};

export default connect(mapStateToProps, null)(HostelDetails);
