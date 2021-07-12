import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom';

const nav = () => (
	<aside className="menu-area">
		<nav className="menu">
			{/* Refatorar pra componente */}
			<Link to="/">
				<i className="fas fa-home"/> Início
			</Link>
			<Link to="/tools">
				<i className="fas fa-tools"/> Ferramentas
			</Link>
		</nav>
	</aside>
);
export default nav;
