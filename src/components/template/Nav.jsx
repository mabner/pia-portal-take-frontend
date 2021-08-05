import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => (
	<aside className="menu-area">
		<nav className="menu">
			{/* Refatorar pra componente */}
			<Link to="/">
				<i className="fas fa-home" /> Início
			</Link>
			<Link to="/tools">
				<i className="fas fa-tools" /> Cadastro
			</Link>
			<Link to="/map">
				<i className="fas fa-map" /> Mapa
			</Link>
			<Link to="/login">
				<i className="fas fa-sign-out-alt" /> Login
			</Link>
			<Link to="/logout">
				<i className="fas fa-sign-out-alt" /> Logout
			</Link>
		</nav>
	</aside>
);
export default nav;
