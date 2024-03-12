'use client';
import React from 'react';
import './CardAdvisor.css';
import { Card } from 'flowbite-react';

const CardAdvisor = ({ image, name, description }) => {
	return (
		<Card className="max-w-sm" imgSrc={image} horizontal>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{name}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
		</Card>
	);
};

export default CardAdvisor;
