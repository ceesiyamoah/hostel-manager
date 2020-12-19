export const login = (loginDetails) => async (dispatch) => {
	console.log(loginDetails);
	dispatch({ type: 'LOGIN', payload: loginDetails });
	//access firebase
};

export const signup = (signupDetails) => async (dispatch) => {
	console.log(signupDetails);
	dispatch({ type: 'SIGNUP', payload: signupDetails });
	//access firebase
};
