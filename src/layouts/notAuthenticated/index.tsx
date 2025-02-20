import React from 'react';

import * as S from './styles';
import { useMobile } from '../../context/Mobile';

interface Props {
  children: React.ReactElement;
}

const NotAuthenticated: React.FC<Props> = ({ children }) => {
  const { mobile } = useMobile();
  return (
    <div>
      <S.Layout>
        <S.ContentLayout mobile={mobile}>{children}</S.ContentLayout>
      </S.Layout>
    </div>
  );
};
export default NotAuthenticated;
