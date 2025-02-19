import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import * as Page from '../../pages/private';
import { routes } from '../constants';
import Route from '../Route';

const RoutesPrivate: React.FC = () => (
  <Switch>
    <Route path={routes.private.dashboard} component={Page.Dashboard} exact isPrivate />
    <Redirect from='*' to={routes.private.dashboard} />
  </Switch>
);

export default RoutesPrivate;
