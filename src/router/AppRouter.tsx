import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutPublicPage from '../layout/LayoutPublicPage';
import { NoFoundPage } from '../components';
import { HomePage, AdvisorsPage, InformationPage, ContactPage } from '../pages';

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
					// {
					// 	path: '/login',
					// 	element: <LoginPage />,
					// },
					// {
					// 	path: '/register',
					// 	element: <RegisterPage />,
					// },
				],
			},
		],
	},
]);
