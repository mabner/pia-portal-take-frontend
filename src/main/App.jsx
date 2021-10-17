import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';

import './App.css';
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Routes from './Routes';
import Footer from '../components/template/Footer';

// Test <HashRouter> for deploy if <BrowserRouter> presents any problems

const app = () => (
	<HashRouter>
		<div className="app">
			<Logo />
			<Nav />
			<Routes />
			<Footer />
		</div>
	</HashRouter>
);
export default app;