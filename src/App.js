import React from 'react';
import Login from './components/Login';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
	return (
		<div className='app'>
			<NavBar />
			<Home />
		</div>
	);
};

export default App;
