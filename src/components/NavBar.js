import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { signout } from './../actions/authActions';
import { NavBarData } from './NavBarData';

const NavBar = ({ uid, signout, isVerified }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);
	const toggleSideBar = () => setIsExpanded(!isExpanded);

	//* when user is logged in  show toggle bar and signout
	if (uid) {
		if (isVerified) {
			return (
				<>
					<div className='navbar'>
						<FaBars
							onClick={toggleSideBar}
							color='white'
							className='menu-bars'
						/>
						<Link to='/dashboard'>Hostels</Link>
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
							{NavBarData.map((item, index) => {
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
		}
		//* when user is signed in but not verified only show signout
		return (
			<div className='navbar-container'>
				<ul className='list unverified'>
					<button className='signout' onClick={signout}>
						Signout
					</button>
				</ul>
			</div>
		);
	}

	//* not logged in show sign in and sign up buttons
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
const mapStateToProps = (state) => ({
	uid: state.firebase.auth.uid,
	isVerified: state.firebase.auth.emailVerified,
});

export default connect(mapStateToProps, { signout })(NavBar);
