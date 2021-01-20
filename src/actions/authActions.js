import history from '../history';
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

export const login = ({ email, password }) => (
	dispatch,
	getState,
	{ getFirebase }
) =>
	getFirebase()
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			dispatch({ type: LOGIN });
			history.push('/dashboard');
		})
		.catch((error) => {
			dispatch({ type: AUTH_ERROR, payload: error.message });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		});

export const signout = () => (dispatch, getState, { getFirebase }) => {
	getFirebase()
		.auth()
		.signOut()
		.then(() => {
			dispatch({ type: SIGN_OUT });
			history.push('/');
		});
};

export const signup = ({ email, password, name }) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	return getFirebase()
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userData) => {
			userData.user
				.updateProfile({
					displayName: name,
					photoURL: '',
				})
				.then()
				.catch();
			dispatch({ type: SIGNUP });
			history.push('/dashboard');
		})
		.catch((error) => {
			dispatch({ type: AUTH_ERROR, payload: error.message });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		});
};

export const sendVerificationEmail = () => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.auth()
		.currentUser.sendEmailVerification()
		.then(() => {
			dispatch({ type: VERIFY_EMAIL });
		})
		.catch((error) =>
			dispatch({ type: VERIFY_EMAIL_ERROR, payload: error.message })
		);
};

export const sendResetPasswordEmail = (email) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			dispatch({ type: SEND_RESET_PASSWORD });
		})
		.catch((error) =>
			dispatch({ type: SEND_RESET_PASSWORD_ERROR, payload: error.message })
		);
};
