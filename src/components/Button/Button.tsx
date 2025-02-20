import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

import { Container, StyledButton, WrapperLoad } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  name,
  text,
  typeStyle,
  disabled = false,
  loading = false,
  width = 0,
  color,
  icon,
  iconSize,
  ...rest
}) => {
  const renderIcon = () => {
    if (loading) {
      return (
        <WrapperLoad>
          <Icon spin icon={faSpinner} />
        </WrapperLoad>
      );
    }

    if (icon)
      return (
        <Icon
          icon={icon as IconProp}
          size={iconSize}
          style={{ color: color }}
        />
      );
  };

  return (
    <Container
      typeStyle={typeStyle}
      width={width}
      disabled={disabled}
      color={color}
    >
      <StyledButton name={name} type='button' disabled={disabled} {...rest}>
        {renderIcon()}
        {text && <strong>{text}</strong>}
      </StyledButton>
    </Container>
  );
};
