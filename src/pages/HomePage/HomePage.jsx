'use client';
import React from 'react';
import './HomePage.css';
import { IoLibrary } from 'react-icons/io5';
import { ImLibrary } from 'react-icons/im';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { FaBookBookmark } from 'react-icons/fa6';
import { IoMegaphoneSharp } from 'react-icons/io5';
import { FaCodeBranch } from 'react-icons/fa';
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
				<h1 className="text-lg font-semibold">Informacion Institucional</h1>
			</div>
			<div className="flex justify-center flex-wrap gap-10 mt-24">
				<div className="w-52 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<IoLibrary className="text-7xl text-teal-400" />
					<p>Biblioteca Miguel Henriquez Castañeda</p>
				</div>
				<div className="w-52 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<ImLibrary className="text-7xl text-teal-400" />
					<p>Consultorios Juridicos y Centro de Conciliacion</p>
				</div>

				<div className="w-52 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<BsFillLightbulbFill className="text-7xl text-teal-400" />
					<p>Centro de Innovacion y Desarrollo Empreserial</p>
				</div>
				<div className="w-52 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<FaBookBookmark className="text-7xl text-teal-400" />
					<p>Centro de escritura de lectura</p>
				</div>
				<div className="w-52 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<IoMegaphoneSharp className="text-7xl text-teal-400" />
					<p>Comunicaciones Institucionales</p>
				</div>
				<div className="w-52 flex flex-col items-center justify-center text-center rounded-xl p-4 shadow-2xl">
					<FaCodeBranch className="text-7xl text-teal-400" />
					<p>Comunicaciones Institucionales</p>
				</div>
			</div>
			<div
				className="w-full h-60 mt-28 blur-[3px] mb-28"
				style={{
					backgroundImage:
						"url('https://tuyyoconstruimos.cartagena.gov.co/sites/default/files/2022-12/Logo%20Rafael%20Nu%C3%B1ez%201.jpeg')",
				}}></div>
		</div>
	);
};

export default HomePage;
