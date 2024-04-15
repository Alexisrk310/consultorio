import React from 'react';

const WhatWeOfferPage = () => {
	return (
		<div className="my-3">
			<div className="mb-5">
				<h1 className="text-3xl font-bold text-[#00a09a] text-center mb-5">
					Nosotros ofrecemos
				</h1>
				<p className="">
					En el Proyecto Consultorio Empresarial, no solo ofrecemos servicios
					estándar; ofrecemos un compromiso total con el crecimiento y la
					innovación de tu negocio. Desde asesoramiento estratégico hasta
					soluciones personalizadas, nuestro equipo altamente calificado está
					listo para abordar tus desafíos empresariales más apremiantes. Con un
					enfoque centrado en la excelencia y la creatividad, estamos aquí para
					impulsar tu empresa hacia nuevas alturas. Descubre cómo podemos
					trabajar juntos para transformar tus visiones en realidad y alcanzar
					el éxito sostenible en un mercado en constante evolución.
				</p>
			</div>
			<div class="bg-gradient-to-br from-main to-slate-400 p-8 rounded-lg shadow-lg">
				<h2 class="text-3xl font-bold text-white mb-4">
					Descubre cómo podemos impulsar tu negocio con el Proyecto Consultorio
					Empresarial
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="bg-white bg-opacity-50 rounded-lg p-6">
						<h3 class="text-xl font-semibold text-[#00a09a] mb-2">Asesorías</h3>
						<p class="text-gray-800">
							Aprovecha nuestro conocimiento especializado para desbloquear el
							potencial oculto en tus proyectos.
						</p>
						<p className="text-right font-light cursor-pointer hover:text-blue-600 mb-0">
							Tomar servicio
						</p>
					</div>
					<div class="bg-white bg-opacity-50 rounded-lg p-6">
						<h3 class="text-xl font-semibold text-[#00a09a] mb-2">
							Consultorías
						</h3>
						<p class="text-gray-800">
							Sumérgete en un enfoque estratégico diseñado para detectar y
							resolver obstáculos comerciales, todo dentro del marco del
							Proyecto Consultorio Empresarial.
						</p>
					</div>
					<div class="bg-white bg-opacity-50 rounded-lg p-6">
						<h3 class="text-xl font-semibold text-[#00a09a] mb-2">
							Emprendimientos e Innovación
						</h3>
						<p class="text-gray-800">
							Explora nuevas fronteras y despierta la creatividad empresarial
							mediante soluciones innovadoras ofrecidas por el Proyecto
							Consultorio Empresarial.
						</p>
					</div>
					<div class="bg-white bg-opacity-50 rounded-lg p-6">
						<h3 class="text-xl font-semibold text-[#00a09a] mb-2">
							Gestión de Proyectos
						</h3>
						<p class="text-gray-800">
							Deja que nuestro equipo experto en gestión de proyectos maneje los
							detalles operativos, permitiéndote centrarte en tu visión
							empresarial dentro del Proyecto Consultorio Empresarial.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOfferPage;
