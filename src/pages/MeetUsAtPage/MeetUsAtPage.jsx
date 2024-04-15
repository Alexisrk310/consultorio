'use client';
import React from 'react';

const MeetUsAtPage = ({}) => {
	return (
		<div className="p-8 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="md:col-span-1">
					<h2 className="text-3xl font-bold mb-4 text-[#00a09a]">
						¡Bienvenido al Consultorio Jurídico Empresarial de la CURN!
					</h2>
					<p className="text-lg mb-4">
						En el Consultorio Jurídico Empresarial de la Corporación
						Universitaria Rafael Nuñez (CURN), nos esforzamos por ofrecer un
						enfoque innovador y dinámico para resolver los desafíos legales de
						tu empresa.
					</p>
					<p className="text-lg mb-4">
						Nuestro equipo de abogados altamente capacitados y comprometidos
						está aquí para brindarte asesoramiento experto en una amplia gama de
						áreas legales, desde la constitución de empresas hasta litigios
						comerciales y todo lo demás.
					</p>
					<p className="text-lg mb-4">
						Además de nuestros servicios legales, ofrecemos talleres
						interactivos y seminarios educativos diseñados para capacitar a
						emprendedores y empresarios en áreas clave del derecho empresarial.
					</p>
				</div>
				<div className="md:col-span-1 flex justify-center items-center">
					<img
						src="./logo-info.jpg"
						alt="Consultorio Jurídico Empresarial"
						className="w-full max-w-sm rounded-lg shadow-md"
					/>
				</div>
			</div>
			<div className="mt-8">
				<h3 className="text-2xl font-bold mb-4 text-[#00a09a]">
					Nuestros Servicios Principales
				</h3>
				<ul className="list-disc list-inside text-lg mb-4">
					<li>Constitución de empresas y asuntos corporativos.</li>
					<li>Contratos comerciales y negociación.</li>
					<li>Propiedad intelectual y derechos de autor.</li>
					<li>Resolución de disputas y litigios empresariales.</li>
					<li>
						Asesoramiento en cumplimiento legal y regulaciones comerciales.
					</li>
				</ul>
				<p className="text-lg">
					Ya sea que estés iniciando un nuevo negocio o gestionando una empresa
					establecida, estamos aquí para brindarte el apoyo legal que necesitas
					para alcanzar el éxito.
				</p>
			</div>
		</div>
	);
};

export default MeetUsAtPage;
