import React from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';

export const NavBarData = [
	{
		title: 'Add hostel',
		path: '/managershostel/addhostel',
		icon: <BiBuildings />,
		cName: 'nav-text',
	},
	{
		title: 'Residents',
		path: '/residents',
		icon: <BsFillPeopleFill />,
		cName: 'nav-text',
	},
	{
		title: 'Announcements',
		path: '/announcements',
		icon: <FaBullhorn />,
		cName: 'nav-text',
	},
];
