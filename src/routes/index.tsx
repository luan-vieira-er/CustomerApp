import { useContext } from 'react';

import AuthProvider from '../context/AuthProvider';

import RoutesPrivate from './private';
import RoutesPublic from './public';
import { privateRole } from './constants';

const RoutesComponent: React.FC = () => {
  const { data } = useContext(AuthProvider);

  if (!data) return <RoutesPublic />;

  if (data.user.profiles.includes(privateRole)) {
    return <RoutesPrivate />;
  }

  return <RoutesPublic />;
};

export default RoutesComponent;
