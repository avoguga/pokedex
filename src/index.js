import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';
import About from './pages/AboutPokemon/About';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>    
      <Route path="/pokemon/:name" component={About}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

