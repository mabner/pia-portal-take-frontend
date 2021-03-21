import './Main.css';
import React from 'react';
import Header from './Header'

export default (
	/** @type {JSX.IntrinsicAttributes & { icon: any; title: string | number | boolean | {} | React.ReactNodeArray | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>>; subtitle: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }} */ props
) => (
	<React.Fragment>
		<Header {...props} />
		<main className="content container-fluid">
			<div className="p-3 mt3">{props.children}</div>
		</main>
	</React.Fragment>
);