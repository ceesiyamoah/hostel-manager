import app from './../firebase';
import 'firebase/firestore';
import history from './../history';
import firebase from 'firebase/app';

export const login = (loginDetails) => async (dispatch) => {
	console.log(loginDetails);
	dispatch({ type: 'LOGIN', payload: loginDetails });
	//access firebase
};

export const signup = (signupDetails) => async (dispatch) => {
	const { email, password, name } = signupDetails;
	console.log(email, password);

	try {
		const {
			user: { uid },
		} = await app.auth().createUserWithEmailAndPassword(email, password);
		console.log(uid);

		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshot: true,
		});
		db.collection('managers').doc(uid).set({
			name,
			email,
		});

		history.push('/dashboard');
	} catch (error) {
		console.log(error);
	}

	//dispatch({ type: 'SIGNUP', payload: signupDetails });
	//access firebase
};
