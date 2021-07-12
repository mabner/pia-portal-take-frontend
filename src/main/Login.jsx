import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo-header.svg';

import './Login.css';

import React from 'react';
import {BrowserRouter} from 'react-router-dom';


const login = () => (
	<BrowserRouter>
		<div className="app">
			<div id="login-logo-container">
				<img src={logo} alt="Blip logo" id="login-logo"/>
			</div>

			<div id="login-btn-container">
				<p>
					<button
						className="btn-github"
						type="button"
						onClick={() => window.open('auth/github', '_top')}>
						Entrar com Github
					</button>
				</p>
			</div>
		</div>
	</BrowserRouter>
);
export default login;