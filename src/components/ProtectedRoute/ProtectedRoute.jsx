'use client';
import React from 'react';
import './ProtectedRoute.css';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ redirectTo = '/', children }) => {
	const isAuthenticated = localStorage.getItem('token');
	!isAuthenticated ? (
		<>
			<Navigate to={redirectTo} />
		</>
	) : (
		children
	);
};

export default ProtectedRoute;
