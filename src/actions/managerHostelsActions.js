import { ADD_HOSTEL, ADD_HOSTEL_ERROR } from '../types';

export const addHostel = (hostelDetails) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	const firestore = getFirebase().firestore();
	const authorId = getState().firebase.auth.uid;
	firestore
		.collection('hostels')
		.doc(hostelDetails.hostelName)
		.set({ ...hostelDetails, authorId, dateAdded: new Date() })
		.then(() => {
			dispatch({ type: ADD_HOSTEL });
		})
		.catch((err) => {
			dispatch({ type: ADD_HOSTEL_ERROR, payload: err.message });
		});
};
