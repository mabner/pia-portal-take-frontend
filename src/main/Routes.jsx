import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import ToolsCrud from '../components/tools/ToolsCrud';
import Login from './Login';

export default () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/tools" component={ToolsCrud} />
		<Route path="/login" component={Login} />
		{/* <Redirect from="*" to="/" /> */ }
	</Switch>
);
