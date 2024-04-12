'use client';
import React from 'react';
import './ProtectedRoute.css';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ redirectTo = '/', children }) => {
	const isAuthenticated = localStorage.getItem('token');
	if (!isAuthenticated) return <Navigate to={redirectTo} />;
	return children ? children : <Outlet />;
};

export default ProtectedRoute;
