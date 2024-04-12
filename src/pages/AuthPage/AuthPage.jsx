'use client';
import React from 'react';
import { useForm } from '../../hooks/useForm';

const AuthPage = ({}) => {
	const { formAuth, setFormAuth, handleChange } = useForm({
		email: '',
		password: '',
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormAuth({
			email: formAuth.email.trim(),
			password: formAuth.password,
		});
	};
	return (
		<div className="min-h-[80vh]  flex justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="py-8 px-4 bg-white rounded-2xl shadow-xl z-20 w-full sm:w-96">
				<div>
					<h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">
						Bienvenido
					</h1>
					<p className="w-full text-center text-sm mb-6 font-semibold text-gray-700 tracking-wide cursor-pointer">
						Ingresa para que puedas acceder a nuestros servicios
					</p>
				</div>
				<div className="space-y-4">
					<input
						type="text"
						className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
						id="email"
						placeholder="correo@example.com"
						name="email"
						value={formAuth.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
						id="password"
						name="password"
						placeholder="********"
						value={formAuth.password}
						onChange={handleChange}
					/>
				</div>
				<div className="text-center mt-4">
					<button className="w-full py-2 text-lg text-white bg-[#00a09a] rounded-lg hover:bg-[#00a09ba1] transition-all">
						Iniciar sesión
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthPage;
