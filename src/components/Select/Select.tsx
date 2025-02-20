import React from 'react';
import { Wrapper, Error, customStyles } from './styles';
import SelectLib from 'react-select';
import { OptionsProps, SelectProps } from './types';
import { FiAlertTriangle } from 'react-icons/fi';
import { useTheme } from '../../context/Theme';

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  isLoading = false,
  disabled = false,
  error = false,
  messageError,
  value,
  options,
  typeWeight = 'sm',
  onChange,
  ...rest
}) => {
  const { theme } = useTheme();

  const handleChange = ({ value }: OptionsProps) => {
    if (onChange) {
      onChange(value);
    }
    return;
  };

  const newValue = () => {
    const search = options?.find((item) => value === item.value);
    return search ?? null;
  };

  return (
    <Wrapper
      isErrored={error}
      data-testid={`input-selectbox-container-` + { name }}
    >
      {label && (
        <div className='label'>
          <span>{label}</span>
        </div>
      )}
      <SelectLib
        name={name}
        styles={customStyles(theme, typeWeight, error)}
        onChange={(value) => handleChange(value as OptionsProps)}
        isLoading={isLoading}
        isDisabled={disabled}
        components={{
          IndicatorSeparator: () => null,
        }}
        value={newValue()}
        options={options}
        {...rest}
      />
      {error && messageError && (
        <Error>
          <FiAlertTriangle size={12} />
          <span>{messageError}</span>
        </Error>
      )}
    </Wrapper>
  );
};
