import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutPublicPage from '../layout/LayoutPublicPage';
import { NoFoundPage } from '../components';
import {
	HomePage,
	AdvisorsPage,
	InformationPage,
	ContactPage,
	AuthPage,
	UbicationPage,
	MeetUsAtPage,
	WhatWeOfferPage,
	AboutPage,
} from '../pages';

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPublicPage />,
		errorElement: <NoFoundPage />,
		children: [
			{
				errorElement: <NoFoundPage />,

				children: [
					{
						index: true,
						element: <HomePage />,
					},

					{
						path: '/asesores',
						element: <AdvisorsPage />,
					},
					{
						path: '/informacion-institucional',
						element: <InformationPage />,
					},
					{
						path: '/contactanos',
						element: <ContactPage />,
					},
					{
						path: '/auth',
						element: <AuthPage />,
					},
					{
						path: '/ubicacion',
						element: <UbicationPage />,
					},
					{
						path: '/nosotros-somos',
						element: <MeetUsAtPage />,
					},
					{
						path: '/nosotros-ofrecemos',
						element: <WhatWeOfferPage />,
					},
					{
						path: '/acerca-de',
						element: <AboutPage />,
					},
					// {
					// 	path: '/register',
					// 	element: <RegisterPage />,
					// },
				],
			},
		],
	},
]);
