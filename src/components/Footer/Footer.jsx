'use client';
import React from 'react';
import './Footer.css';
import {
	IoCall,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoYoutube,
	IoLogoRss,
	IoLogoInstagram,
	IoLogoAndroid,
	IoLogoApple,
} from 'react-icons/io5';
import { IoLogoGoogleplus } from 'react-icons/io';

const Footer = ({}) => {
	return (
		<footer className="flex justify-around items-center text-center flex-wrap bg-[#00a09a]">
			<img
				src="https://atlas.curn.edu.co/public/web/images/logoestamoscert6.png"
				className="footer_img"></img>
			{/* <img src={'./vite.png'} alt="logo" className="footer_img2" /> */}

			<div className="flex flex-col items-center">
				<a href="https://curn.edu.co/politicas/politicadatospersonalescurn.html">
					Política de tratamiento de datos personales
				</a>

				<a href="https://axis.curn.edu.co:2641/soporte/">
					PQRS | Sistema para la gestión de quejas, reclamos, sugerencias y
					felicitaciones
				</a>

				<a href="https://axis.curn.edu.co:2641/soporte/">
					Información y Contactos
				</a>

				<a href="https://axis.curn.edu.co:2641/soporte/">
					Asuntos y notificaciones judiciales
				</a>

				<h2 className="flex">
					<IoCall />
					(605)6439499 | Centro Calle de la Soledad N° 5 -70 | Cartagena,
					Colombia
				</h2>
				{/* <h2 className="flex">
					<IoCall /> (605)3198826 | Cra 54, N° 66-54 | Barranquilla, Colombia
				</h2> */}

				<p>
					Corporación Universitaria Rafael Núñez | Institución Universitaria |
					Vigilada Mineducación
				</p>
				<p>
					Reconocimiento personería jurídica: Resolución 6644 del 5 de junio de
					1985 Mineducación.
				</p>
				<p>
					Institución de Educación Superior sujeta a inspección y vigilancia por
					parte del Ministerio de Educación Nacional.
				</p>
			</div>
			<div className="flex flex-col items-center w-52 text-3xl">
				<div className="flex gap-3">
					<IoLogoFacebook className="cursor-pointer hover:text-blue-800" />
					<IoLogoTwitter className="cursor-pointer hover:text-cyan-400" />
					<IoLogoYoutube className="cursor-pointer hover:text-red-600" />
					<IoLogoGoogleplus className="cursor-pointer hover:text-white" />
				</div>

				<div className="flex gap-3">
					<IoLogoRss className="cursor-pointer hover:text-red-600" />
					<IoLogoInstagram className="cursor-pointer hover:text-pink-400" />
					<IoLogoAndroid className="cursor-pointer hover:text-green-400" />
					<IoLogoApple className="cursor-pointer hover:text-white" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
