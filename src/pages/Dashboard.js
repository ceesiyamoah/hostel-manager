import React from 'react';
import SideBar from '../components/SideBar';
const Dashboard = () => {
	return (
		<>
			<SideBar />
			<div className='dashboard-container'>
				<h1>Welcome you're logged in</h1>
			</div>
		</>
	);
};

export default Dashboard;
