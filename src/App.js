import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ThankYou from './components/ThankYou/ThankYou';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Route path="/thank-you" component={ThankYou} />
				<Route exact path="/" render={() => <Form {...this.props} />} />
			</>
		);
	}
}

export default withRouter(inject('store')(App));