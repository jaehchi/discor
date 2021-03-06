import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/landing';
import Home from './components/home';

import './components/globals/globals.sass';

const App = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/' component={Landing} />
  </Switch>
);

export default App;
