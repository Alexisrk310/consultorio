import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, NavBar } from '../components';

const LayoutPublicPage = () => {
	return (
		<>
			<div className="sm:mx-0 md:mx-24 lg:mx-48 transition">
				{/* <Header /> */}
				<NavBar />

				<Outlet />
			</div>
			<Footer />
		</>
	);
};
export default LayoutPublicPage;
