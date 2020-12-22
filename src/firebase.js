import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
	apiKey: 'AIzaSyCo6C_UejwvmOj_8DUcxpvRHA254QX8dpQ',
	authDomain: 'hostelmananger.firebaseapp.com',
	databaseURL: 'https://hostelmananger.firebaseio.com',
	projectId: 'hostelmananger',
	storageBucket: 'hostelmananger.appspot.com',
	messagingSenderId: '148512636475',
	appId: '1:148512636475:web:485c6be286723dbcd8a61e',
	measurementId: 'G-JBX2036ME2',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
