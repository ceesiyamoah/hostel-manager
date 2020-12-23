import history from '../history';

export const login = ({ email, password }) => (
	dispatch,
	getState,
	{ getFirebase }
) =>
	getFirebase()
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			dispatch({ type: 'LOGIN' });
			history.push('/dashboard');
		})
		.catch((error) => {
			dispatch({ type: 'AUTH_ERROR', payload: error.message });
			setTimeout(() => {
				dispatch({ type: 'CLEAR_ERROR' });
			}, 5000);
		});

export const signout = () => (dispatch, getState, { getFirebase }) => {
	getFirebase()
		.auth()
		.signOut()
		.then(() => {
			dispatch({ type: 'SIGN_OUT' });
			history.push('/');
		});
};

export const signup = ({ email, password, name }) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	console.log(getFirebase());
	return getFirebase()
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			dispatch({ type: 'SIGN_UP' });
			history.push('/dashboard');
		})
		.catch((error) => {
			dispatch({ type: 'AUTH_ERROR', payload: error.message });
			setTimeout(() => {
				dispatch({ type: 'CLEAR_ERROR' });
			}, 5000);
		});
};

export const sendVerificationEmail = () => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	const user = getFirebase().auth().currentUser;
	console.log(user);

	user
		.sendEmailVerification()
		.then(() => {
			dispatch({ type: 'VERIFY_EMAIL' });
		})
		.catch((error) =>
			dispatch({ type: 'VERIFY_EMAIL_ERROR', payload: error.message })
		);
};

// try {
// 	const { user } = await app
// 		.auth()
// .signInWithEmailAndPassword(email, password);
// 	console.log(user);
// dispatch({ type: 'LOGIN', payload: user });

// 	history.push('/dashboard');
// } catch (error) {
// dispatch({ type: 'AUTH_ERROR', payload: error.message });
// setTimeout(() => {
// 	dispatch({ type: 'CLEAR_ERROR' });
// }, 5000);
// });

// export const setCurrentUser = (user) => (dispatch) => {
// 	dispatch({ type: 'LOGIN', payload: user });
// };

// export const signup = ({ email, password, name }) => async (dispatch) => {
// 	try {
// 		const { user } = await app
// 			.auth()
// 			.createUserWithEmailAndPassword(email, password);
// 		dispatch({ type: 'SIGNUP', payload: user });

// 		const db = firebase.firestore();
// 		db.settings({
// 			timestampsInSnapshot: true,
// 		});
// 		db.collection('managers').doc(user.uid).set({
// 			name,
// 			email,
// 		});

// 		history.push('/dashboard');
// 	} catch (error) {
// 		dispatch({ type: 'AUTH_ERROR', payload: error.message });
// 		setTimeout(() => {
// 			dispatch({ type: 'CLEAR_ERROR' });
// 		}, 5000);
// 	}
// };

// export const signout = () => (dispatch) => {
// 	firebase
// 		.auth()
// 		.signOut()
// 		.then(() => {
// 			dispatch({ type: 'SIGN_OUT' });
// 			history.push('/');
// 		})
// 		.catch((error) => {
// 			console.log('not done');
// 			dispatch({ type: 'SIGN_OUT_ERROR', payload: error });
// 		});
// };
