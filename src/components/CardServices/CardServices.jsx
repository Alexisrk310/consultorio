'use client';
import React from 'react';
import './CardServices.css';
import { Card } from 'flowbite-react';

const CardServices = ({ img, title, description }) => {
	return (
		<Card
			className="sm:m-10 md:m-0"
			imgAlt="Imagenes de consultoria"
			imgSrc={img}>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
		</Card>
	);
};

export default CardServices;
