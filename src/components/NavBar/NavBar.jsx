'use client';
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Dropdown, Navbar } from 'flowbite-react';

const NavBar = ({}) => {
	return (
		<Navbar rounded>
			<Navbar.Brand as={Link} href="/">
				<img src="./logonew.png" className="sm:w-48 lg:w-96 w-48" alt="Logo" />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Dropdown label="La Corporacion" inline>
					<Dropdown.Item as={Link} to="/informacion-institucional">
						Información institucional
					</Dropdown.Item>
					{/* <Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item> */}
					<Dropdown.Divider />
					<Dropdown.Item as={Link} to={'/contactanos'}>
						Contactanos
					</Dropdown.Item>
				</Dropdown>
				<Dropdown label="Servicios" inline>
					<Dropdown.Item as={Link} to={'/asesores'}>
						Asesores
					</Dropdown.Item>
					{/* <Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Separated link</Dropdown.Item> */}
				</Dropdown>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
