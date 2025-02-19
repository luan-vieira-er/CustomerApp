import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import * as Page from '../../pages/public';
import { routes } from '../constants';
import Route from '../Route';

const RoutesPublic: React.FC = () => (
  <Switch>
    <Route path={routes.public.login} exact component={Page.SignIn} />
    <Redirect from='*' to={routes.public.login} />
  </Switch>
);

export default RoutesPublic;
