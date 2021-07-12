import './Logo.css';
import React from 'react';
import {Link} from 'react-router-dom';

const logo = () => (
	<aside className="logo">
		<Link to="/" className="logo">
			<img src={logo} alt="Take Blip"/>
		</Link>
	</aside>
);
export default logo;