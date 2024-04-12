'use client';
import React from 'react';

const UbicationPage = ({}) => {
	return (
		<div className="flex flex-col items-center mb-10">
			<p className="text-3xl font-bold text-[#00a09a] my-5">
				Aquí nos encontramos
			</p>
			<div className="mx-auto w-full lg:w-3/4 xl:w-2/3 h-96 lg:h-80 xl:h-96 mb-10">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.9259035016923!2d-75.54689101825674!3d10.41911136969023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f744ac08fb5%3A0x9d0de60b05d2e3ca!2zVU5JTlXDkUVaIHwgU2VkZSBHZXRzZW1hbsOt!5e0!3m2!1ses-419!2sco!4v1712902869327!5m2!1ses-419!2sco"
					width="100%"
					height="100%"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full h-full"></iframe>
			</div>
		</div>
	);
};

export default UbicationPage;
