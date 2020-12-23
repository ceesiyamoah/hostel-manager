import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducers';
import {
	getFirebase,
	ReactReduxFirebaseProvider,
	isLoaded,
} from 'react-redux-firebase';
import firebase from './firebase';
import { createFirestoreInstance } from 'redux-firestore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <div>splash screen...</div>;
	return children;
};

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<AuthIsLoaded>
				<App />
			</AuthIsLoaded>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);
