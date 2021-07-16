import './Logo.css';
import React from 'react';
import logosvg from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';

const logo = () => (
	<aside className="logo">
		<Link to="/" className="logo">
			<img src={logosvg} alt="Take Blip"/>
		</Link>
	</aside>
);
export default logo;