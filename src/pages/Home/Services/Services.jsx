import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className="mb-10 mt-20">
			<h2 className='text-3xl font-semibold text-orange-500 text-center'>
				Services
			</h2>
			<h2 className='text-5xl font-semibold text-center'>Our Services</h2>
			<p className='text-center w-1/2 mx-auto mt-5'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
				corporis itaque totam nam officiis, veritatis, voluptatum quas adipisci
			</p>
			<div className="grid grid-cols-3 gap-10 mt-10">
				{services.map((service) => (
					<ServiceCard key={service._id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
