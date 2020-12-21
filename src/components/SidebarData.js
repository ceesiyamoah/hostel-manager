import React from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';

export const SidebarData = [
	{
		title: 'Add hostel',
		path: '/hostels',
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
