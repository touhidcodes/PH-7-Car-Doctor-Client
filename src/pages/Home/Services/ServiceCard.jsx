import React from "react";

const ServiceCard = ({ service }) => {
	const { img, title, price } = service;
	return (
		<div className='card card-compact w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src={img} alt='Shoes' className='h-60 w-full' />
			</figure>
			<div className='card-body flex flex-row justify-between'>
				<div>
					<h2 className='card-title'>{title}</h2>
					<p className='text-orange-500 font-semibold'>Price: {price}</p>
				</div>
				<div className='card-actions justify-end'>
					<button className='btn btn-warning border-none text-white'>Go</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
