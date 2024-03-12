'use client';
import React from 'react';
import { Carousel as Carouse } from 'flowbite-react';
import './Carousel.css';

const Carousel = ({}) => {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
			<Carouse slideInterval={5000}>
				<img src="./consultorio.png" alt="consultorio" />
				<img src="./consultorio.png" alt="consultorio" />
				<img src="./consultorio.png" alt="consultorio" />
				<img src="./consultorio.png" alt="consultorio" />
			</Carouse>
		</div>
	);
};

export default Carousel;
