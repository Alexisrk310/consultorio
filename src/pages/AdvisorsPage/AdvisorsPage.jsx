'use client';
import React from 'react';
import { CardAdvisor } from '../../components';

const AdvisorsPage = ({}) => {
	return (
		<div className="flex justify-center items-center flex-wrap gap-3 mt-24 mb-24">
			<CardAdvisor
				image={'./advisor/advisor-one.jpg'}
				name={'Manuela Ramirez'}
				description={
					'Soy una asesora personal comprometida contigo, dispuesta a brindarte apoyo y orientación en cualquier situación que necesites. Con su experiencia y dedicación, te ayudará a encontrar las soluciones que mejor se adapten a tus necesidades.'
				}
			/>
			<CardAdvisor
				image={'./advisor/advisor-two.jpg'}
				name={'Edgardo Torres'}
				description={
					'Soy un asesor personal altamente capacitado para proporcionarte la ayuda que necesitas. Con su conocimiento y profesionalismo, estará a tu disposición para ofrecerte el mejor asesoramiento y acompañamiento en tus decisiones.'
				}
			/>
			<CardAdvisor
				image={'./advisor/advisor-three.jpg'}
				name={'Mario Guerrero'}
				description={
					'Soy una persona asesora dedicada a brindarte el apoyo que necesitas en todas tus gestiones. Su compromiso y atención personalizada te garantizan una experiencia de asesoramiento integral y efectiva.'
				}
			/>
			<CardAdvisor
				image={'./advisor/advisor-four.jpg'}
				name={'Sara Rodriguez'}
				description={
					'Soy una asesora personal con amplia experiencia en asistencia integral. Está aquí para ayudarte en todo lo que necesites, proporcionándote soluciones efectivas y orientación experta en cada paso del camino.'
				}
			/>
		</div>
	);
};

AdvisorsPage.propTypes = {};

export default AdvisorsPage;
