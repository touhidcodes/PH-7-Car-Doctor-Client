import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
	const { signInUser } = useContext(AuthContext);
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signInUser(email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
                console.log(user)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage, errorCode);
			});
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
									required
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
									required
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
						<p>
							New to the car doctors?
							<Link
								to='/signup'
								className='text-orange-500 font-semibold underline decoration-solid'
							>
								Sign Up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
