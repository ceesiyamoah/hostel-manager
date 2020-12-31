import React from 'react';
import { useParams } from 'react-router';
const HostelDetails = (props) => {
	const thing = useParams();
	console.log(thing);
	return <div className='dashboard-container'>fkdls</div>;
};

export default HostelDetails;
