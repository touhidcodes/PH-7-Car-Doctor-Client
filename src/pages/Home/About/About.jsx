import React from "react";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
	return (
		<div className='hero min-h-screen bg-base-200 mb-10 py-16'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='lg:w-1/2 relative pl-10 pb-10'>
					<img src={person} className='w-3/4 rounded-lg shadow-2xl h-96' />
					<img
						src={parts}
						className=' absolute w-1/2 rounded-lg shadow-2xl right-5 top-2/3 border-8 border-white'
					/>
				</div>
				<div className='lg:w-1/2'>
					<h3 className='text-xl text-orange-600 font-semibold'>About Us</h3>
					<h1 className='text-5xl font-bold pr-10 mt-5'>
						We are qualified in the car Maintenance and Repairing
					</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<p className=''>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className='btn btn-warning mt-10'>Get More Info</button>
				</div>
			</div>
		</div>
	);
};

export default About;
