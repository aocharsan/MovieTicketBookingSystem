import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import LoginPage from './admin/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Routers  from './router/Routers'

function App() {
  return (<div> 
    {/* <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path='/CityList' component={CityList} />

      <Route path='/AddCity' component={AddCity} />
    </Switch>
  </BrowserRouter> */}
 <Routers/>

  </div>
  );
}

export default App;
