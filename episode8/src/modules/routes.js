import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App.js';
import RoomContainer from '../containers/room-container';

export default (
	<Switch>
		<Route exact path="/" component={App} />
		<Route exact path="/rooms" component={RoomContainer} />
		<Route path="/about" component={App} />
	</Switch>
);