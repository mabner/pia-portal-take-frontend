import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
	<aside className="menu-area">
		<nav className="menu">
			{/* Refatorar pra componente */}
			<Link to="/">
				<i className="fas fa-home"></i> Início
			</Link>
			<Link to="/tools">
				<i className="fas fa-tools"></i> Ferramentas
			</Link>
		</nav>
	</aside>
);