import React, { Component } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ThankYou from './components/ThankYou/ThankYou';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
    
          <Route exact path="/" component={Form} />
          <Route path="/thank-you" component={ThankYou} />
        </>
    </BrowserRouter>
    );
  }
}

export default App;
