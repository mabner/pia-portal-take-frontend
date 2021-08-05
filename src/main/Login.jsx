import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from '../assets/images/logo-header.svg';
import Main from '../components/template/Main';
import './Login.css';

const headerProps = {
	icon: 'login',
	title: 'Fazer Login no Portal',
	subtitle: 'Fazer login no portal usando OAuth.',
};

const BACK_URL = process.env.REACT_APP_BACK_URL;

export default class Login extends Component {
	login = () => (
		<BrowserRouter>
			<div className="container">
				<img src={logo} alt="Blip logo" id="login-logo" />
				<div id="login-btn-container">
					<p>
						<button
							className="btn-github"
							type="button"
							onClick={() =>
								window.open(`${BACK_URL}/auth/github`, '_top')
							}
						>
							Entrar com Github
						</button>
						<br />
					</p>
				</div>
			</div>
		</BrowserRouter>
	);
	render() {
		return <Main {...headerProps}>{this.login()}</Main>;
	}
}
