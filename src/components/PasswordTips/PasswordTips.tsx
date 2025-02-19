import * as React from 'react';
import {
  faCaretRight,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components/Icon';

import * as S from './styles';
import { IPasswordTips } from './types';

const renderIconProps = (ruleValidation: boolean | null) => {
  if (ruleValidation === true) return { icon: faCheck };
  if (ruleValidation === false) return { icon: faXmark };
  return { icon: faCaretRight };
};

export const PasswordTips: React.FC<IPasswordTips> = ({ rules, title }) => {
  return (
    <S.StyledPasswordTip>
      <h4>{title}</h4>
      <S.StyledRules>
        {rules &&
          rules.map((rule) => (
            <S.StyledRule key={rule.message} hasPassedRule={rule.routine()}>
              <Icon {...renderIconProps(rule.routine())} />
              <span>{rule.message}</span>
            </S.StyledRule>
          ))}
      </S.StyledRules>
    </S.StyledPasswordTip>
  );
};
