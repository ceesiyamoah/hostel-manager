import app from './../firebase';

import history from './../history';
export const login = (loginDetails) => async (dispatch) => {
	console.log(loginDetails);
	dispatch({ type: 'LOGIN', payload: loginDetails });
	//access firebase
};

export const signup = (signupDetails) => async (dispatch) => {
	const { email, password } = signupDetails;
	console.log(email, password);

	try {
		const test = await app
			.auth()
			.createUserWithEmailAndPassword(email, password);
		console.log(test);
		console.log(history);
		history.push('/dashboard');
	} catch (error) {
		console.log(error);
	}

	//dispatch({ type: 'SIGNUP', payload: signupDetails });
	//access firebase
};
