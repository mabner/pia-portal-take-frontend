import './Header.css';
import React from 'react';

export default (
	/** @type {{ icon: any; title: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal; subtitle: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }} */ props
) => (
	<header className="header d-none d-sm-flex flex-column">
		<meta name="description" content="Portal de Ferramentas Take.
		Acesso fácil e rápido as ferramentas disponibilizadas no PowerBI,
		API Rest e Jupyter Notebooks em um só lugar. Com mapa de ferramentas
		catalogadas para facilmente encontrar o que precisa." />
		<h1 className="mt-3">
			<i className={ `fas fa-${ props.icon }` }></i> { props.title }
		</h1>
		<p className="lead text-muted">{ props.subtitle }</p>
	</header>
);