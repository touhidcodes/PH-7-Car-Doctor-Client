import React, { useContext } from "react";
import signup from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
	const { createUser, loading } = useContext(AuthContext);

	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		createUser(email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	return (
		<div className='hero min-h-screen bg-base-200 mt-10'>
			<div className='hero-content  flex-row '>
				<div className='text-center mr-52 w-1/2'>
					<img src={signup} alt='' />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h1 className='text-3xl font-bold text-center'>Sign Up now!</h1>
						<form onSubmit={handleSignUp}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									placeholder='name'
									className='input input-bordered'
									name='name'
									required
								/>
							</div>
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
									value='Sign Up'
									className='btn btn-primary'
								/>
							</div>
						</form>
						<p>
							Already have an account?{" "}
							<Link
								to='/login'
								className='text-orange-500 font-semibold underline decoration-solid'
							>
								Log In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
