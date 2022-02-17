import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home-page/homepage.component';
import HatsPage from './pages/hats-page/hats-page.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/shop/hats'} component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
