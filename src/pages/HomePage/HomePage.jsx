'use client';
import React from 'react';
import './HomePage.css';
import { FaBookBookmark } from 'react-icons/fa6';
import { FaBalanceScale } from 'react-icons/fa';
import { GiToyMallet } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GoProjectRoadmap } from 'react-icons/go';
import { CardServices, Carousel } from '../../components';

const HomePage = ({}) => {
	const imageSpecialists = [
		'./derecho-humanistico',
		'./derecho-penal',
		'./derecho-privado',
		'./derecho-publico',
		'./derecho-social',
	];

	return (
		<div className="homepage mt-10">
			<Carousel />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
				<CardServices
					img="./derecho-humanistico.jpg"
					title="Consultoría en Recursos Humanos"
					description="Se especializa en ofrecer servicios relacionados con la gestión del talento, reclutamiento, selección de personal, evaluación del desempeño, capacitación y desarrollo, entre otros."
					className={'w-min-[212px] w-max-[212px]'}
				/>
				<CardServices
					img="./derecho-humanistico.jpg"
					title="Consultoría Financiera"
					description="Proporciona asesoramiento en áreas financieras, como la planificación presupuestaria, análisis de costos, gestión de inversiones, evaluación de riesgos financieros y desarrollo de estrategias financieras."
				/>
				<CardServices
					img="./derecho-social.jpg"
					title="Consultoría en Tecnología de la Información (TI)"
					description="Enfocada en asesorar a las empresas en la implementación, optimización y mantenimiento de sistemas informáticos, seguridad de la información, desarrollo de software, y estrategias de transformación digital."
				/>
				<CardServices
					img="./derecho-privado.jpg"
					title="Consultoría en Marketing y Publicidad"
					description="Ofrece servicios relacionados con la planificación y ejecución de estrategias de marketing, publicidad, gestión de marca, análisis de mercado, y desarrollo de campañas para mejorar la visibilidad y la participación del cliente."
				/>
				<CardServices
					img="./derecho-publico.jpg"
					title="Consultoría en Gestión Empresarial"
					description="Se centra en la mejora de procesos internos, la eficiencia operativa, la toma de decisiones estratégicas, la planificación estratégica y la implementación de mejores prácticas de gestión."
				/>
				<CardServices
					img="./derecho-penal.jpg"
					title="Consultoría Legal Empresarial"
					description="Brinda asesoramiento legal especializado en cuestiones empresariales, contratos comerciales, cumplimiento normativo, resolución de disputas, propiedad intelectual y otras áreas legales específicas para empresas."
				/>
			</div>
			<div className="flex justify-center my-24">
				<h1 className="text-3xl font-bold text-[#00a09a]">
					Servicios que ofrecemos
				</h1>
			</div>
			<div className="flex justify-center flex-wrap gap-10 mt-24 mb-28">
				<div className="w-56 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<GiToyMallet className="text-7xl text-teal-400" />
					<p>Asesorias</p>
				</div>
				<div className="w-56 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<FaBalanceScale className="text-7xl text-teal-400" />
					<p>Consultorias</p>
				</div>

				<div className="w-56 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<HiOutlineLightBulb className="text-7xl text-teal-400" />
					<p>Emprendimiento e innovación</p>
				</div>
				<div className="w-56 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<GoProjectRoadmap className="text-7xl text-teal-400" />
					<p>Gestión de proyectos</p>
				</div>
			</div>
			{/* <div
				className="w-full h-60 mt-28 blur-[3px] mb-28"
				style={{
					backgroundImage:
						"url('https://tuyyoconstruimos.cartagena.gov.co/sites/default/files/2022-12/Logo%20Rafael%20Nu%C3%B1ez%201.jpeg')",
				}}></div> */}
		</div>
	);
};

export default HomePage;
