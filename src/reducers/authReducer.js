const authReducer = (
	state = { errorMessage: null, verificationError: null },
	{ type, payload }
) => {
	switch (type) {
		case 'AUTH_ERROR':
			return { ...state, errorMessage: payload };
		case 'SIGNUP':
			return state;
		case 'LOGIN':
			return state;
		case 'CLEAR_ERROR':
			return { ...state, errorMessage: '' };
		case 'SIGN_OUT':
			return state;
		case 'VERIFY_EMAIL':
			return state;
		case 'VERIFY_EMAIL_ERROR':
			return { ...state, verificationError: payload };
		default:
			return state;
	}
};

export default authReducer;
