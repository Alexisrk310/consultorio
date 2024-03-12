import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, NavBar } from '../components';

const LayoutPublicPage = () => {
	return (
		<>
			<Header />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};
export default LayoutPublicPage;
