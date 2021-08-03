import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo-header.svg';
import './Login.css';

import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

const BACK_URL = process.env.REACT_APP_BACK_URL;

export default class Login extends Component {
	componentWillMount() {
		axios(BACK_URL).then((resp) => {
			this.setState({ list: resp.data });
		});
	}

	login() {
		return (
			<BrowserRouter>
				<div className="container">
					<img src={logo} alt="Blip logo" id="login-logo" />

					<div id="login-btn-container">
						<p>
							<button
								className="btn-github"
								type="button"
								onClick={() => window.open('/auth/github', '_top')}
							>
								Entrar com Github
							</button>
							<br />
						</p>
					</div>
				</div>
			</BrowserRouter>
		);
	}

	render() {
		return this.login();
	}
}
