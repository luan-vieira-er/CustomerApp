import React from 'react';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Box, Tooltip } from '@mui/material';
import { InputText } from 'components/InputText';

import { SearchItem } from './SearchItem';
import * as S from './styles';
import { SearchMultipleValuesTypes } from './types';

export const SearchMultipleValues: React.FC<SearchMultipleValuesTypes> = ({
  searchItems,
  setSearchItems,
}) => {
  const [searchInput, setSearchInput] = React.useState<string>('');

  const createSearchItem = (value: string) => {
    if (searchItems.length < 5) {
      setSearchItems([...searchItems, value]);
    }
  };

  const getItemsByKeyPress = (key: string) => {
    if (key === 'Enter') {
      setSearchInput('');
      createSearchItem(searchInput);
    }
  };

  const closeSearchItem = (value: string) => {
    setSearchItems(searchItems.filter((item: string) => item !== value));
  };

  return (
    <S.SearchContainer>
      <S.SearchItemsWrapper>
        {searchItems.map((item: string, index: number) => (
          <SearchItem
            key={index.toString()}
            value={item}
            close={closeSearchItem}
          />
        ))}
      </S.SearchItemsWrapper>
      <InputText
        icon={faAddressBook}
        placeholder="Pesquisar"
        value={searchInput}
        onKeyDown={({ key }: KeyboardEvent) => getItemsByKeyPress(key)}
        onChange={({ target }) => setSearchInput(target.value)}
        height="30px"
      />
      {!!searchItems.length && (
        <Tooltip
          PopperProps={S.StyledTooltip}
          title="Limpar Busca"
          arrow
          placement="top-end"
        >
          <Box>
            <S.StyledButton
              icon={faAddressBook}
              typeStyle="third"
              iconSize="1x"
              onClick={() => setSearchItems([])}
            />
          </Box>
        </Tooltip>
      )}
    </S.SearchContainer>
  );
};
