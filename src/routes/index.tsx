import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductAdmin from '../pages/ProductAdmin';
import ProductPurchase from '../pages/ProductPurchase';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProductAdmin} />
      <Route path="/purchase" component={ProductPurchase} />
    </Switch>
  );
};

export default Routes;
