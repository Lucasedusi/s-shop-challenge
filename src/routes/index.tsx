import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductAdmin from '../pages/ProductAdmin';
import ProductPurchase from '../pages/ProductPurchase';

import ProductUser from '../pages/ProductUser';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProductAdmin} />
      <Route path="/purchase" component={ProductPurchase} />

      <Route path="/product-user" component={ProductUser} />
    </Switch>
  );
};

export default Routes;
