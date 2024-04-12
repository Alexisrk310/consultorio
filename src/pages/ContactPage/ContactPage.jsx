'use client';
import React from 'react';
import { ImProfile } from 'react-icons/im';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
const ContactPage = ({}) => {
	return (
		<div className="contactPage">
			<h1 className="text-3xl font-bold text-[#00a09a] text-center">
				Contactanos
			</h1>
			<form className="sm:m-16 rounded p-4 *:my-4 ">
				<div className="mb-2 block">
					<Label htmlFor="name" value="Nombre" />
				</div>
				<TextInput
					id="name"
					type="text"
					icon={ImProfile}
					placeholder="Escribe tu nombre..."
					required
				/>
				<div className="mb-2 block">
					<Label htmlFor="lastname" value="Apellidos" />
				</div>
				<TextInput
					id="lastname"
					type="text"
					icon={ImProfile}
					placeholder="Escribe tu apellido..."
					required
				/>
				<div className="mb-2 block">
					<Label htmlFor="email" value="Correo electronico" />
				</div>
				<TextInput
					id="email"
					type="email"
					icon={HiMail}
					placeholder="name@example.com"
					required
				/>
				<div className="mb-2 block">
					<Label htmlFor="email4" value="Descripción" />
				</div>
				<Textarea
					id="email4"
					type="email"
					placeholder="Escribe lo que piensas..."
					required
				/>
				<button
					className="bg-[#00a09a] hover:bg-[#4bafac] text-white font-bold py-2 px-4 rounded block w-full"
					type="submit">
					Enviar
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
