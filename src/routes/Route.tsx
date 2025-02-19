import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
} from 'react-router-dom';

import Authenticated from '../layouts/authenticated';
import NotAuthenticated from '../layouts/notAuthenticated';

interface RouterProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  if (!isPrivate) {
    return (
      <ReactDOMRoute
        {...rest}
        render={() => (
          <NotAuthenticated>
            <Component />
          </NotAuthenticated>
        )}
      />
    );
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <Authenticated>
          <Component />
        </Authenticated>
      )}
    />
  );
};

export default Route;
