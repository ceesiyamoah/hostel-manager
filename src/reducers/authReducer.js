const authReducer = (
	state = { errorMessage: '', userId: '' },
	{ type, payload }
) => {
	switch (type) {
		case 'AUTH_ERROR':
			return { ...state, errorMessage: payload };
		case 'SIGNUP':
			return { ...state, userId: payload, errorMessage: '' };
		case 'LOGIN':
			return { ...state, userId: payload, errorMessage: '' };
		case 'CLEAR_ERROR':
			return { ...state, errorMessage: '' };
		default:
			return state;
	}
};

export default authReducer;
