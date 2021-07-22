import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../components/home/Home';
import ToolsCrud from '../components/tools/ToolsCrud';
import useGaTracker from '../useGaTracker';
import Login from './Login';

import withTracker from '../withTracker';

const Routes = () =>
{
	useGaTracker();
	return (
		<Switch>
			<Route exact path="/" component={ withTracker( Home ) } />
			<Route path="/tools" component={ withTracker( ToolsCrud ) } />
			<Route path="/login" component={ withTracker( Login ) } />
			{/* <Redirect from="*" to="/" /> */ }
		</Switch>
	);
};

export default Routes;