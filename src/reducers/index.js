import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import managerHostelsReducer from './managerHostelsReducer';

export default combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	auth: authReducer,
	managerHostel: managerHostelsReducer,
});
