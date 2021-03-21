import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import ToolsCrud from '../components/tools/ToolsCrud';

export default (props) => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/tools" component={ToolsCrud} />
		<Redirect from="*" to="/" />
	</Switch>
);
