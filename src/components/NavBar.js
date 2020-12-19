import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className='navbar-container'>
			<ul className='list'>
				<button>Hostels</button>
				<Link to='/signup'>
					<button className='signup'>Sign Up</button>
				</Link>

				<Link to='/login'>
					<button className='login'>Login</button>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
