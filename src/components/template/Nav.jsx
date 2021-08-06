import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const BACK_URL = process.env.REACT_APP_BACK_URL;

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default class Nav extends Component {
	componentWillMount() {
		axios(BASE_URL).then((res) => {
			this.setState({ list: res.data });
		});
	}

	nav = () => (
		<aside className="menu-area">
			<span className="text-warning">Perfil: </span>
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
					href=""
					className=""
					onClick={() => window.open(`${BACK_URL}/logout`, '_top')}
				>
					<i className="fas fa-sign-out-alt" /> Logout
				</a>
			</nav>
		</aside>
	);
	render() {
		return this.nav();
	}
}
