export const ammenties = [
	{ name: 'Generator', id: 'generator' },
	{ name: 'Library', id: 'library' },
	{ name: 'Study Room', id: 'studyRoom' },
	{ name: 'Wifi', id: 'wifi' },
	{ name: 'Security', id: 'security' },
	{ name: 'Parking Space', id: 'parkingSpace' },
	{ name: 'Recreational Space', id: 'recreationalSpace' },
	{ name: 'TV Room', id: 'tvRoom' },
];
export const roomFacilities = [
	'Wash Room',
	'Kitchen',
	'Balcony',
	'Personal Electricity Meter',
	'Air Conditioner',
	'Refridgerator',
];

export const roomInitialState = {
	bedspace: parseFloat(0).toFixed(0),
	washroom: false,
	pictures: null,
	priceperbed: parseFloat(0).toFixed(2),
	kitchen: false,
	balcony: true,
	personalelectricitymeter: false,
	airconditioner: false,
	refridgerator: false,
};

export const hostelInitialState = {
	hostelName: '',
	location: '',
	description: '',
	pictures: null,
	generator: false,
	library: false,
	studyRoom: false,
	wifi: false,
	security: false,
	parkingSpace: false,
	recreationalSpace: false,
	tvRoom: false,
};

export const hostelFormDetails = [
	{ name: 'Hostel Name', id: 'hostelName' },
	{ name: 'Location', id: 'location' },
	{ name: 'Description', type: 'textarea', id: 'description' },
	{
		name: 'Picture(s)',
		id: 'pictures',
		type: 'file',
		rest: "multiple accept='image/*'",
		multiple: true,
		accept: 'image/*',
	},
];
