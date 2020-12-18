import React from 'react';
import loginSVG from './../svg/loginSVG.svg';

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
						<button>Login</button>
						<button>Sign up</button>
					</div>
				</form>
			</div>
			<div className='right-div'>
				<img src={loginSVG} alt='test' height='400' width='400' />
			</div>
		</div>
	);
};

export default Login;
