import React from 'react';

import {
  StyledIcon,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from './styles';

import { InputTextProps } from './types';

export const InputText: React.FC<InputTextProps> = ({
  id,
  value,
  defaultValue,
  fullWidth,
  placeholder,
  icon,
  label,
  inputRef,
  children,
  onChange = () => null,
  height = '33px',
  background = '#18181B',
  color = '#e4e4e7',
  ...otherProps
}) => {
  const ref = React.useRef<HTMLInputElement>() || inputRef;

  const [plaholderShown, setPlaceholderShown] = React.useState<boolean>(false);

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
    setPlaceholderShown(!!evt.target.value);
  };

  React.useEffect(() => {
    if (ref.current) {
      setPlaceholderShown(!!ref.current.value);
    }
  }, [ref, value]);

  const commonProps = {
    placeholderShown: !plaholderShown,
  };

  return (
    <StyledInputWrapper
      color={color}
      background={background}
      fullWidth={fullWidth}
      height={height}
      {...commonProps}
    >
      <StyledInput
        background={background}
        type='text'
        id={id}
        value={value}
        color={color}
        ref={ref}
        placeholder={placeholder}
        defaultValue={defaultValue}
        icon={!!icon}
        onChange={handleOnChange}
        data-testid='inputText'
        {...otherProps}
        {...commonProps}
      />
      {!!label && (
        <StyledLabel
          htmlFor={id}
          color={color}
          background={background}
          {...commonProps}
        >
          {label}
        </StyledLabel>
      )}
      {!!icon && <StyledIcon icon={icon} color={color} />}
      {children}
    </StyledInputWrapper>
  );
};
