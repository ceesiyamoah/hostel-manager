import { getFirebase } from 'react-redux-firebase';
import history from '../history';
import { ADD_HOSTEL, ADD_HOSTEL_ERROR } from '../types';

export const addHostel = ({ pictures, hostelName, ...hostelDetails }) => async (
	dispatch,
	getState,
	{ getFirebase }
) => {
	const uploadedFiles = await Promise.all(
		pictures.map(async (file, index) => {
			const uploadTask = getFirebase()
				.storage()
				.ref()
				.child(
					`images/${getState().firebase.auth.uid}/${hostelName}/${
						hostelName + index
					}.${file.name.split('.')[1]}`
				)
				.put(file);
			const url = await new Promise((resolve, reject) => {
				uploadTask.on(
					'state_changed',
					() => {},
					(error) => reject(error),
					async () => {
						const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
						resolve(downloadUrl);
					}
				);
			});
			return url;
		})
	);
	getFirebase()
		.firestore()
		.collection('hostels')
		.doc(hostelDetails.hostelName)
		.set({
			...hostelDetails,
			pictures: uploadedFiles,
			hostelName,
			authorId: getState().firebase.auth.uid,
			dateAdded: new Date(),
			manager: getState().firebase.auth.email,
			rooms: [],
		})
		.then(() => {
			dispatch({ type: ADD_HOSTEL });
			history.push('/dashboard');
		})
		.catch((err) => {
			dispatch({ type: ADD_HOSTEL_ERROR, payload: err.message });
		});
};
export const addRoomToHostel = ({ id, manager }, roomDetails) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.firestore()
		.collection('hostels')
		.doc(id)
		.update({
			rooms: getFirebase().firestore.FieldValue.arrayUnion(roomDetails),
		})
		.then(() => {
			history.push(`/managerhostels/${manager}/${id}`);
		})
		.catch((err) => console.log(err));
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
