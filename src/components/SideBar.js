import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const SideBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleSideBar = () => setIsExpanded(!isExpanded);
	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaBars onClick={toggleSideBar} />
				</Link>
			</div>
			<nav className={isExpanded ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={toggleSideBar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<IoCloseOutline />
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

export default SideBar;
