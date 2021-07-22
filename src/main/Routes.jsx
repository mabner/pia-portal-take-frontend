import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../components/home/Home';
import ToolsCrud from '../components/tools/ToolsCrud';
import useGaTracker from '../useGaTracker';
import Login from './Login';

const Routes = () =>
{
	useGaTracker();
	return (
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route path="/tools" component={ ToolsCrud } />
			<Route path="/login" component={ Login } />
			{/* <Redirect from="*" to="/" /> */ }
		</Switch>
	);
};

export default Routes;