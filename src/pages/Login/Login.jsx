import React from "react";
import login from "../../assets/images/login/login.svg";

const Login = () => {
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
	};
	return (
		<div className='hero min-h-screen bg-base-200 mt-10'>
			<div className='hero-content  flex-row '>
				<div className='text-center mr-52 w-1/2'>
					<img src={login} alt='' />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h1 className='text-3xl font-bold text-center'>Login now!</h1>
						<form onSubmit={handleLogin}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									placeholder='email'
									className='input input-bordered'
									name='email'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='password'
									className='input input-bordered'
									name='password'
								/>
								<label className='label'>
									<a href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div className='form-control mt-6'>
								<input
									type='submit'
									value='Login'
									className='btn btn-primary'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
