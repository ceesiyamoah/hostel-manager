import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { connect } from 'react-redux';
import { signout } from './../actions/authActions';

const SideBar = ({ signout }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleSideBar = () => setIsExpanded(!isExpanded);
	return (
		<>
			<div className='navbar'>
				<FaBars onClick={toggleSideBar} color='white' className='menu-bars' />

				<button className='signout' onClick={signout}>
					Sign out
				</button>
			</div>
			<nav className={isExpanded ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={toggleSideBar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<IoCloseOutline color='white' />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default connect(null, { signout })(SideBar);
