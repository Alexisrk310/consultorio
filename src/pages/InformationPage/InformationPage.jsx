import React from 'react';
import { TabsInfo } from '../../components';

import {
	AiFillExclamationCircle,
	AiFillEye,
	AiOutlineHistory,
} from 'react-icons/ai';

function InformationPage() {
	const tabs = [
		{
			title: 'ACERCA DE',
			icon: AiFillExclamationCircle,
			active: true,
			content: (
				<div className="p-2">
					<span className=" text-gray-800 dark:text-white">
						La Corporación Universitaria Rafael Núñez, al comprometerse en su
						Misión con la formación integral de profesionales y la
						transformación sociocultural de su entorno local y regional, dentro
						de los principios del desarrollo humano sostenible, asume
						implícitamente el compromiso ineludible con el desarrollo de una
						cultura de calidad, que se constituya en un marco orientador y
						regulador, de todos y cada uno de los propósitos, decisiones y
						acciones de carácter normativo, académico, administrativo y
						evaluativo.
					</span>
				</div>
			),
		},
		{
			title: 'MISIÓN Y VISIÓN',
			icon: AiFillEye,
			active: false,
			content: (
				<div className="p-2">
					<p>
						<span className="font-medium block text-gray-800 dark:text-white">
							MISIÓN
						</span>
						La Corporación Universitaria Rafael Núñez es una Institución de
						Educación Superior de carácter privado, comprometida con la
						formación de un ser humano integral, con sensibilidad y capacidad
						para proyectar sus acciones a la transformación sociocultural de su
						entorno local y regional, con una visión universal, regida por los
						principios del Desarrollo Humano Sostenible.
						<span className="font-medium block text-gray-800 dark:text-white">
							VISIÓN
						</span>
						La Corporación Universitaria Rafael Núñez se propone, en la próxima
						década, ser reconocida en el ámbito nacional e internacional como
						una opción formativa de vanguardia, distinguida por la excelencia
						profesional y la calidad humana de sus egresados, sus innovaciones
						pedagógicas, la solidez científica de su comunidad académica y su
						contribución al Desarrollo Humano Sostenible.
					</p>
				</div>
			),
		},
		{
			title: 'RESEÑA HISTORICA',
			icon: AiOutlineHistory,
			active: false,
			content: (
				<div className="p-2">
					<p>
						La Corporación, inició labores en el Barrio de Manga de la ciudad de
						Cartagena con el Programa en Licenciatura en Educación Preescolar el
						6 de abril de 1987. Posteriormente, en febrero de 1991, la sede se
						traslada al sector amurallado de la ciudad a una casa colonial
						ubicada en la Calle de la Soledad, en la cual se da apertura al
						programa de Licenciatura en Educación Especial, con jornada diurna,
						y el pregrado de Contaduría Pública en Jornadas diurna y nocturna.
						Tres años más tarde, en 1994 se inician los Programas de Derecho y
						de Instrumentación Quirúrgica. Los programas señalados, se
						constituyeron en solución a algunas carencias en cuanto a formación
						disciplinar específica en la ciudad. De esta manera, la Licenciatura
						en Educación Especial fue la única existente en la región, y la
						Licenciatura en Educación Preescolar, es sólo la que se ofrece en la
						ciudad de Cartagena, a nivel profesional. Actualmente se preserva el
						programa de Licenciatura, ofreciendo el programa de Pedagogía
						Infantil. En cuanto al programa de Contaduría Pública y Derecho se
						propuso la jornada nocturna en la ciudad. El primero, se caracterizó
						por ser el segundo programa en Cartagena en este horario. En lo
						referente al programa de Derecho se destacó por ser el único en esta
						modalidad en nuestro entorno. Lo anterior, satisface los intereses
						de muchas personas, imposibilitadas para asistir en jornada
						contraria. Por su parte, el Programa de Instrumentación Quirúrgica,
						se inició a nivel tecnológico, convirtiéndose al poco tiempo al
						orden de los programas profesionales, en la única opción de esta
						naturaleza académica en la ciudad de Cartagena, y el Departamento.
						El programa apuntó a satisfacer la demanda de la profesionalización
						de las instrumentadoras empíricas, quiénes se beneficiaron de este,
						para obtener su título a nivel profesional. Posteriormente, en el
						año de 1997 inician labores académicas los Programas de
						Bacteriología, Enfermería, Administración de Empresas e Ingeniería
						de Sistemas, siendo los dos últimos, exitosamente acogidos en la
						jornada nocturna. En el 2003, la Corporación Universitaria Rafael
						Núñez, inicia un proceso de extensión a otras localidades del Caribe
						Colombiano, ofreciendo en la ciudad de Barranquilla, el Programa de
						Derecho, en modalidad presencial, a la fecha cuenta con seis
						promociones de graduados. Así mismo, en el 2011 se abre la
						Tecnología en Estética y Cosmetología; 2013 Tecnología en Mecánica
						Dental y Trabajo Social, y en el 2014 el programa de Enfermería.
						Paulatinamente la Corporación avanza en su proceso de desarrollo y
						continúa ofertando nuevos programas de pregrado y programas en
						tecnologías como: los pregrados de Medicina, Odontología, Ingeniería
						Civil y Arquitectura, los cuales se inician en febrero de 1999; las
						tecnologías en Mecánica Dental, Tecnología en Estética y
						Cosmetología y Tecnología en Atención Pre Hospitalaria, se gestan en
						2008, respectivamente. Para este mismo año, la CURN, ya se planteaba
						la posibilidad de desarrollar programas técnicos, tecnológicos y
						profesionales por ciclos propedéuticos, de acuerdo a la Ley 1188 del
						2008. Por otra parte, en el año 2010 se realiza la apertura de la
						Tecnología en Sistemas de Información y Software, y la Tecnología en
						Contabilidad Sistematizada. La Corporación da paso a la Formación
						por Ciclos Propedéuticos, reglamentado por la Ley 749 de 2002, del
						Ministerio de Educación Nacional, específicamente en las áreas de
						ingenierías, las tecnologías y la administración. La formación
						propedéutica permite el fortalecimiento de las instituciones de
						educación superior, el crecimiento del sector laboral; y al
						individuo le ofrece la ventaja de mejorar su formación de forma
						flexible y complementaria. Para el 2011, la apertura del Programa de
						Trabajo Social, recientemente acreditado en modalidad Profesional,
						completa nuestra oferta académica de calidad. Por último, el
						programa de Licenciatura en el 2017-02 empieza su primera corte de
						Especialización en Educación y Diversidad única en el país.
					</p>
				</div>
			),
		},
	];

	return (
		<div className="mb-64">
			<h1 className="text-center my-11 text-3xl font-bold text-[#00a09a]">
				Nuestra Corporación
			</h1>
			<div>
				<TabsInfo tabs={tabs} />
			</div>
		</div>
	);
}

export default InformationPage;
