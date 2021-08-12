import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import Map from '../components/tools/Map';
import ToolsCrud from '../components/tools/ToolsCrud';
import useGaTracker from '../useGaTracker';
import withTracker from '../withTracker';
import Login from './Login';

const Routes = () => {
	useGaTracker();
	return (
		<Switch>
			<Route exact path="/" component={withTracker(Login)} />
			<Route exact path="/home" component={withTracker(Home)} />
			<Route path="/tools" component={withTracker(ToolsCrud)} />
			<Route path="/login" component={withTracker(Login)} />
			<Route path="/map" component={withTracker(Map)} />
			{/* <Redirect from="*" to="/" /> */}
		</Switch>
	);
};

export default Routes;
