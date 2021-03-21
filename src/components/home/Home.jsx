import React from 'react';
import Main from '../template/Main';

export default (props) => (
	<Main icon="home" title="Início" subtitle="Portal de Ferramentas">
		<div className="display-4">Bem Vindo!</div>
		<hr />
		<p className="mb-0">
			Portal desenvolvido para agrupar as ferramentas de Data & Analytics em
			um mesmo lugar, facilitando seu acesso.
		</p>
	</Main>
);
