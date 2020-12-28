import {
	AUTH_ERROR,
	CLEAR_ERROR,
	LOGIN,
	SEND_RESET_PASSWORD,
	SEND_RESET_PASSWORD_ERROR,
	SIGNUP,
	SIGN_OUT,
	VERIFY_EMAIL,
	VERIFY_EMAIL_ERROR,
} from './../types/index';
const authReducer = (
	state = {
		errorMessage: null,
		verificationError: null,
		resetPasswordError: null,
	},
	{ type, payload }
) => {
	switch (type) {
		case AUTH_ERROR:
			return { ...state, errorMessage: payload };
		case SIGNUP:
			return state;
		case LOGIN:
			return state;
		case CLEAR_ERROR:
			return { ...state, errorMessage: '' };
		case SIGN_OUT:
			return state;
		case VERIFY_EMAIL:
			return state;
		case VERIFY_EMAIL_ERROR:
			return { ...state, verificationError: payload };
		case SEND_RESET_PASSWORD_ERROR:
			return { ...state, resetPasswordError: payload };
		case SEND_RESET_PASSWORD:
			return { ...state };
		default:
			return state;
	}
};

export default authReducer;
