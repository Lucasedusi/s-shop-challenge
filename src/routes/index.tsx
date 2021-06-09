import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ProductPurchase from '../pages/ProductPurchase';

import Shop from '../pages/Shop';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/purchase" component={ProductPurchase} />

      <Route path="/shop" component={Shop} />
    </Switch>
  );
};

export default Routes;
