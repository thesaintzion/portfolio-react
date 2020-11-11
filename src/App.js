import React, { Component } from 'react';
import './App.css';
import {  Route, Switch } from 'react-router-dom';


class App extends  Component {

  render(){
    return (
      // <Router>
      <>
      <Switch>
      <Route exact path="/">
      <React.Fragment>
       <p>Header</p>
      </React.Fragment>
     </Route>

 <h1>Other routes</h1>

      <React.Fragment>
        <p>Footer</p>
      </React.Fragment>
      </Switch>
      </>
      // </Router>
      );
  }
}

export default App;
