import React from 'react';
import SignupSVG from './../svg/SignupSVG';

const Login = () => {
	return (
		<div className='container'>
			<div className='left-div'>
				<h1>Welcome</h1>
				<form>
					<label htmlFor='email'>Email:</label>
					<input type='email' id='email' required placeholder='Email' />

					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						required
						placeholder='Password'
					/>
					<div className='buttons-container'>
						<button>Sign up</button>
						<button>Log in</button>
					</div>
				</form>
			</div>
			<div className='right-div'>
				<SignupSVG fill='#ff515f' width='400' height='400' />
			</div>
		</div>
	);
};

export default Login;
