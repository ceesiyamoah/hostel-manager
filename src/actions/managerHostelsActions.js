import history from '../history';
import { ADD_HOSTEL, ADD_HOSTEL_ERROR } from '../types';

export const addHostel = (hostelDetails) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.firestore()
		.collection('hostels')
		.doc(hostelDetails.hostelName)
		.set({
			...hostelDetails,
			authorId: getState().firebase.auth.uid,
			dateAdded: new Date(),
			manager: getState().firebase.auth.displayName,
		})
		.then(() => {
			dispatch({ type: ADD_HOSTEL });
			history.push('/dashboard');
		})
		.catch((err) => {
			dispatch({ type: ADD_HOSTEL_ERROR, payload: err.message });
		});
};

export const getManagerHostels = () => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.firestore()
		.collection('hostels')
		.where('authorId', '==', getState().firebase.auth.uid)
		.then((querySnaphot) => {
			const data = querySnaphot.docs.map((doc) => doc.data);
			console.log(data);
		});
};
