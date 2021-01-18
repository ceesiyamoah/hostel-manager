export const ammenties = [
	'Generator',
	'Library',
	'Study Room',
	'Wifi',
	'Security',
	'Parking Space',
	'Recreational Space',
	'TV Room',
];

export const hostelInitialState = {
	hostelName: '',
	location: '',
	description: '',
	pictures: null,
	ammenities: {
		generator: false,
		library: false,
		studyRoom: false,
		wifi: false,
		security: false,
		parkingSpace: false,
		recreationalSpace: false,
		tvRoom: false,
	},
};

export const hostelFormDetails = [
	'Hostel Name',
	'Location',
	{ name: 'Description', type: 'textarea' },
	{
		name: 'Picture(s)',
		type: 'file',
		rest: "multiple accept='image/*'",
		multiple: true,
		accept: 'image/*',
	},
];
