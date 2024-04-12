import React from 'react';
import { TabsInfo } from '../../components';
import { RiTeamFill } from 'react-icons/ri';
import {
	AiFillExclamationCircle,
	AiFillEye,
	AiOutlineHistory,
} from 'react-icons/ai';
import { GiToyMallet } from 'react-icons/gi';
import { FaBalanceScale } from 'react-icons/fa';
import { RiGovernmentLine } from 'react-icons/ri';

function InformationPage() {
	const tabs = [
		{
			title: 'ACERCA DE',
			icon: AiFillExclamationCircle,
			active: true,
			content: (
				<div className="p-2">
					<p className="text-gray-800 dark:text-white mb-3">
						El Consultorio Jurídico y Centro de Conciliación de la Corporación
						Universitaria Rafael Núñez, es una Unidad Académico Administrativa,
						adscrita al Programa de Derecho, escenario de práctica de los
						estudiantes de los Programas de Derecho y Trabajo Social.
					</p>
					<p className="text-gray-800 dark:text-white my-3">
						El Centro de Conciliación además se encuentra certificado en calidad
						bajo la Norma Técnica NTC 5906:2012 de ICONTEC – MINJUSTICIA, y
						cuenta con el Aval para formar en Conciliación Extrajudicial en
						Derecho (Resolución No. 0352 del 2017 del Ministerio de Justicia y
						del Derecho) que garantiza una adecuada formación en nuestros
						estudiantes en Mecanismos Alternativos de Solución de Conflictos,
						acorde con nuestro perfil conciliador.
					</p>
					<p className="font-medium my-3">¿Cómo está constituido?</p>
					<p className="my-3 flex">
						<GiToyMallet className="text-4xl text-main" />
						<p className="font-medium">Consultorio Jurídico:</p> donde los
						estudiantes prestan sus servicios de asesoría legal en todas las
						disciplinas del Derecho (público y privado).
					</p>
					<p className="my-3">
						<RiTeamFill className="text-4xl text-main inline-block" />
						<p className="font-medium inline">Centro de Conciliación:</p>
						Escenario donde se prestan los servicios de conciliación, definido
						como un mecanismo de solución de conflicto a través del cual dos o
						más personas gestionan por sí mismas la solución de sus diferencias
						con la ayuda de un tercero neutral, imparcial y calificado llamado
						conciliador, que actúa siempre habilitado por las partes,
						facilitando el dialogo entre ellos y promoviendo fórmulas de acuerdo
						que permitan soluciones satisfactorias para ambas partes.
					</p>
					<p className="my-3 ">
						<FaBalanceScale className="text-4xl text-main inline-block" />
						<p className="font-medium inline">
							Sala de Audiencias Públicas:
						</p>{' '}
						espacio de prácticas donde los estudiantes pueden observar el
						desarrollo de Audiencias Públicas reales realizadas por Jueces de la
						República y además hacen simulacros de las mismas, ejerciendo así
						diferentes roles.
					</p>
					<p className="my-3">
						<p>
							Estos servicios son prestados de manera gratuita a la comunidad
							especialmente a las personas de escasos recursos de los estratos
							1, 2 y 3.
						</p>
						Dentro de su Recurso Humano se cuenta con: un Director (a), un
						Secretario(a) General, un Secretario (a) Grado III, diez docentes
						asesores de los cuales ocho se encuentran inscritos como
						conciliadores en el Centro, quienes cumplen con los requisitos
						legales exigidos en la normatividad aplicable para ejercer sus
						cargos. La sede está ubicada en el Centro de la ciudad de Cartagena,
						Barrio Getsemaní, calle larga N° 10-17 con esquina San Antonio,
						Cartagena, Bolívar.
					</p>
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
						<span className="font-medium block text-gray-800 mb-5">
							MISIÓN DEL CONSULTORIO JURÍDICO Y CENTRO DE CONCILIACIÓN
						</span>
						Brindar a nuestros estudiantes formación integral en la atención
						jurídica especializada de todas las áreas del Derecho y en
						Mecanismos Alternativos de Solución de Conflictos, en tolerancia y
						en manejo de soluciones equitativas, para ofrecer a la comunidad
						asesoría jurídica en todas las áreas del Derecho, representación
						judicial y trámite de procesos conciliatorios, con eficiencia,
						eficacia, agilidad, imparcialidad, rigor académico, profesionalismo
						jurídico y atención de calidad. Contamos con un sistema eficiente de
						organización y gestión empresarial y un ejercicio profesional de
						probada competencia y experiencia certificadas.
						<span className="font-medium block text-gray-800 mb-5">
							VISIÓN DEL CONSULTORIO JURÍDICO Y CENTRO DE CONCILIACIÓN
						</span>
						Mantener siempre la vanguardia en la prestación de los servicios de
						asesoría jurídica, representación judicial y atención de trámites
						conciliatorios a nuestros Usuarios, con excelente calidad jurídica,
						profesional y de atención al cliente, así como mantener un escenario
						óptimo de cooperación con la Justicia, con evidente liderazgo en la
						ciudad y proyección en las comunidades más desfavorecidas. Además,
						mantener la permanente formación integral de nuestros estudiantes en
						la atención jurídica en todas las áreas del Derecho, en Mecanismos
						Alternativos de Solución de Conflictos, en tolerancia y en manejo de
						soluciones equitativas, recurriendo siempre a la Conciliación para
						la solución de los mismos.
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
					<p className="mb-5">
						El Consultorio Jurídico de la Corporación Universitaria Rafael
						Núñez, fue aprobado en el año de 1997, mediante resolución No. 0028
						de diciembre 19 de 1997. Este centro, presta sus servicios en aras
						de llegar a ser un escenario óptimo en la cooperación con la
						justicia, con evidente liderazgo en la ciudad y proyección a la
						comunidad acorde a los establecido en el Ley 2113 de 2021
					</p>
					<p>
						Desde 1997 se integró al Consultorio Jurídico el Centro de
						Conciliación, que busca además la formación integral de los
						profesionales del Derecho en la conciliación, en la tolerancia y
						oportunidad de manejo de una solución equitativa de los conflictos,
						recurriendo a la conciliación como método alternativo para su
						solución de conflictos. El Centro de Conciliación se rige bajo los
						parámetros legales de la ley 2220 de 2022, decreto 030 de 2002, y
						además las normas que rigen para los consultorios jurídicos ley 196
						de 1991, decreto 765 de 1977, ley 583 de 2000.
					</p>
				</div>
			),
		},
		{
			title: 'OBJETIVOS Y POLÍTICAS',
			icon: RiGovernmentLine,
			active: false,
			content: (
				<div className="p-2">
					<span className="font-medium block text-gray-800 mb-5">
						¿CUALES SON OBJETIVOS DE CALIDAD DEL CONSULTORIO JURÍDICO Y CENTRO
						DE CONCILIACIÓN?
					</span>

					<p>
						<p>
							El Consultorio Jurídico y Centro de Conciliación de la Corporación
							Universitaria Rafael Núñez, tiene como Objetivos de Calidad los
							siguientes:
						</p>
						<ol className="list-decimal">
							<li>
								Garantizar de manera permanente y constante, mediante el
								programa de educación continua, el conocimiento jurídico y
								científico de nuestros estudiantes de Derecho de Práctica
								Jurídica, con el fin de prestar óptimos servicios de Asesoría
								Jurídica y de Conciliación, desarrollados con el correcto
								cumplimiento normativo y sin margen de error.
							</li>
							<li>
								Garantizar de manera permanente y constante el empleo del
								conocimiento jurídico y científico en las Asesorías jurídicas y
								en los Trámites Conciliatorios, así como la legalidad y la
								transparencia en los mismos, proporcionando siempre la logística
								y la infraestructura necesarias para que los Conciliadores
								(Estudiantes de Práctica Jurídica y Docentes Asesores) cumplan
								sus funciones como asesores jurídicos, apoderados especiales y
								operadores de justicia, coadyuvando así en la construcción de la
								paz, a través de los valores y principios de Igualdad,
								Imparcialidad, Democracia, Participación y Dignidad Humana.
							</li>
							<li>
								Ofrecer a los usuarios y a la comunidad los mecanismos de
								información al público sobre los procesos de Consultorio
								Jurídico y Centro de Conciliación como servicios principales y
								controlar y evaluar de manera constante el cumplimiento correcto
								de los mismos para su información y mejoramiento.
							</li>
							<li>
								Capacitar de manera continua a los Conciliadores (Estudiantes de
								Práctica Jurídica y Docentes Asesores) y demás personas
								vinculadas al Consultorio Jurídico y Centro de Conciliación en
								los temas de atención al cliente, de utilidad y vanguardia
								jurídica, igualmente sobre la responsabilidad penal, civil,
								disciplinaria, patrimonial y de otra índole que asumen al
								ejercer sus funciones.
							</li>
							<li>
								Crear, ampliar y fortalecer las alternativas en servicio
								profesional jurídico y en Mecanismos Alternativos de Solución de
								Conflictos que pueda brindar el Consultorio Jurídico y Centro de
								Conciliación.
							</li>
							<li>
								Lograr la plena y óptima satisfacción de nuestros usuarios en la
								prestación de nuestros servicios.
							</li>
						</ol>
						<span className="font-medium block text-gray-800 my-5">
							¿CUAL ES LA POLÍTICA DE CALIDAD DEL CONSULTORIO JURÍDICO Y CENTRO
							DE CONCILIACIÓN?
						</span>
						<p>
							El Consultorio Jurídico y Centro de Conciliación de la Corporación
							Universitaria Rafael Núñez, se compromete, de forma permanente, a
							promover la formación académica y profesional integral de sus
							estudiantes de Derecho, con el fin de prestar a la comunidad y a
							la población objeto una asesoría jurídica integral y a trabajar de
							manera incesante y con liderazgo, en el mejoramiento continuo del
							servicio, en el avance de la cultura ciudadana sobre la forma de
							resolver los conflictos, sirviendo de terceros neutrales en su
							solución. El compromiso institucional es consolidar la confianza y
							satisfacción de los usuarios, implementando métodos para el uso
							acertado de la Conciliación y hacer de cada atención una
							oportunidad única de óptimo servicio profesional jurídico y de
							pedagogía de paz y tolerancia, con el respeto debido a la Dignidad
							Humana de Usuarios, Convocantes y Convocados.
						</p>
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
