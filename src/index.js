import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
// import Login from './main/Login';
import reportWebVitals from './reportWebVitals';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-199987882-1');

// Return
ReactDOM.render(
	<React.StrictMode>
		{/* <Login /> */}
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
