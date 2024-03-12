import React from 'react';
import { AppRouter } from './router/AppRouter';
import { RouterProvider } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<RouterProvider router={AppRouter} />
		</div>
	);
};

export default App;
