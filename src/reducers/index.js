import { combineReducers } from 'redux';

const authReducer = (
	state = { email: '', password: '', name: '' },
	{ type, payload }
) => {
	switch (type) {
		case 'LOGIN':
			return { email: payload.email, password: payload.password, name: '' };
		case 'SIGNUP':
			return {
				email: payload.email,
				password: payload.password,
				name: payload.name,
			};
		default:
			return state;
	}
};

export default combineReducers({
	auth: authReducer,
});
