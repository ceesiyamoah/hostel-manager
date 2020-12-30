import { ADD_HOSTEL, ADD_HOSTEL_ERROR } from '../types';

const managerHostelsReducer = (
	state = { errorMessage: null },
	{ type, payload }
) => {
	switch (type) {
		case ADD_HOSTEL:
			return state;
		case ADD_HOSTEL_ERROR:
			return { ...state, errorMessage: payload };
		default:
			return state;
	}
};

export default managerHostelsReducer;
