import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo-header.svg';

import './Login.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default () => (
	<BrowserRouter>
		<div className="app">
			<div id="logo-container">
				<img src={logo} alt="blip logo" id="logo" />
			</div>

			<div id="btn-container">
				<p>
					<button
						className="btn-github"
						type="button"
						onClick={() => window.open('auth/github')}
					>
						Entrar com Github
					</button>
				</p>
			</div>
		</div>
	</BrowserRouter>
);
