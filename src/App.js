import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/shop'} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
