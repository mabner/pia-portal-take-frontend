import React from 'react';
import Main from '../template/Main';

const BACK_URL = process.env.REACT_APP_BACK_URL;

const home = () => (
	<Main icon="home" title="Início" subtitle="Portal de Ferramentas">
		<div className="display-4">Bem Vindo!</div>
		<hr />
		<p className="mb-0">
			Portal desenvolvido para agrupar as ferramentas de Data & Analytics em
			um mesmo lugar, facilitando seu acesso.
		</p>
		<div id="login-btn-container">
			<p>
				<button
					className="btn-github"
					type="button"
					onClick={() => window.open(`${BACK_URL}/auth/github`, '_top')}
				>
					Entrar com Github
				</button>
				<br />
			</p>
		</div>
	</Main>
);
export default home;