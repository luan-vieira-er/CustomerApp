import React from 'react';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment } from '@mui/material';

import { StyledIcon, StyledIconButton, StyledInput } from './styles';
import { SearchInputProps } from './types';

export const SearchInput: React.FC<SearchInputProps> = ({
  background,
  textcolor,
  placeholder,
  height,
  width,
  onSubmit,
  handleClear,
  searched,
}) => {
  const [search, setSearch] = React.useState<string>('');

  const handleSubmit = () => {
    onSubmit(search);
  };

  const clearSearch = () => {
    handleClear();
    setSearch('');
  };

  return (
    <StyledInput
      placeholder={placeholder}
      value={search}
      textcolor={textcolor}
      background={background}
      height={height}
      width={width}
      onChange={(e) => setSearch(e.target.value)}
      data-testid="searchInput"
      endAdornment={
        <InputAdornment position="start">
          <StyledIconButton
            onClick={searched ? clearSearch : handleSubmit}
            edge="end"
            type="button"
          >
            <StyledIcon icon={searched ? faXmark : faSearch}></StyledIcon>
          </StyledIconButton>
        </InputAdornment>
      }
    />
  );
};
