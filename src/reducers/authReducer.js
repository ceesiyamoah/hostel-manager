const authReducer = (state = { errorMessage: null }, { type, payload }) => {
	switch (type) {
		case 'AUTH_ERROR':
			return { errorMessage: payload };
		case 'SIGNUP':
			return state;
		case 'LOGIN':
			return state;
		case 'CLEAR_ERROR':
			return { errorMessage: '' };
		case 'SIGN_OUT':
			return state;
		default:
			return state;
	}
};

export default authReducer;
