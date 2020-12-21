import app from '../firebase';
import 'firebase/firestore';
import history from '../history';
import firebase from 'firebase/app';

export const login = ({ email, password }) => async (dispatch) => {
	try {
		const {
			user: { uid },
		} = await app.auth().signInWithEmailAndPassword(email, password);
		dispatch({ type: 'LOGIN', payload: uid });
		history.push('/dashboard');
	} catch (error) {
		dispatch({ type: 'AUTH_ERROR', payload: error.message });
		setTimeout(() => {
			dispatch({ type: 'CLEAR_ERROR' });
		}, 5000);
	}
};

export const signup = ({ email, password, name }) => async (dispatch) => {
	try {
		const {
			user: { uid },
		} = await app.auth().createUserWithEmailAndPassword(email, password);
		dispatch({ type: 'SIGNUP', payload: uid });

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
		dispatch({ type: 'AUTH_ERROR', payload: error.message });
		setTimeout(() => {
			dispatch({ type: 'CLEAR_ERROR' });
		}, 5000);
	}
};
