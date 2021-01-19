import history from '../history';
import { ADD_HOSTEL, ADD_HOSTEL_ERROR } from '../types';

export const addHostel = ({ pictures, hostelName, ...hostelDetails }) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const auth = getState().firebase.auth.uid;

	const storageRef = getFirebase().storage().ref();

	const uploadedFiles = await Promise.all(
		pictures.map(async (file, index) => {
			const uploadTask = storageRef
				.child(
					`images/${auth}/${hostelName}/${hostelName + index}.${
						file.name.split('.')[1]
					}`
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

	// const storageRef = getFirebase().storage().ref();
	// const auth = getFirebase().auth.uid;

	// pictures.forEach((file, index) => {
	// const fileRef = storageRef.child(
	// 	`images/${auth}.${file.name.split('.')[0]}`
	// 	);
	// 	fileRef.put(pictures[index]).then((snapshot) => console.log(snapshot));
	// });
	// await fileRef.put(hostelDetails.pictures[0]);
	// const URL = await fileRef.getDownloadURL();
	// console.log(URL);
	//  getFirebase()
	// 	.storage()
	// 	.ref()
	// 	.child(`test.jpg`)
	// 	.put(hostelDetails.pictures[0])

	// .on(getFirebase().storage.TaskEvent.STATE_CHANGED, (snapshot) => {
	// 	console.log(snapshot.downloadURL);
	// });

	// .then((snapshot) => {
	// 	console.log(snapshot);
	// });
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
