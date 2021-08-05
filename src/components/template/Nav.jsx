import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const BACK_URL = process.env.REACT_APP_BACK_URL;

let dotcom_user = '';

let cookieValue = '';

function getCookie(name) {
	if (document.cookie && document.cookie !== '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === name + '=') {
				cookieValue = decodeURIComponent(
					cookie.substring(name.length + 20)
				);
				break;
			}
		}
	}
	return cookieValue;
}

let profile = getCookie(dotcom_user);

const nav = () => (
	<aside className="menu-area">
		<span className="text-warning">Perfil: {profile}</span>
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
				<i className="fas fa-sign-in-alt" /> Login
			</Link>
			<a
				href="#"
				className=""
				onClick={() => window.open(`${BACK_URL}/logout`, '_top')}
			>
				<i className="fas fa-sign-out-alt" /> Logout
			</a>
		</nav>
	</aside>
);
export default nav;
