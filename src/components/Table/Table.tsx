import React from 'react';

import * as S from './styles';
import { ITableProps } from './types';
import { Box } from '@mui/material';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import { GRID_DEFAULT_LOCALE_TEXT } from './constants';

export const Table: React.FC<ITableProps> = ({
  selectable = false,
  height = 630,
  ...props
}) => {
  return (
    <Box sx={{ height: height, width: '100%' }}>
      <S.StyledDataGrid
        {...props}
        checkboxSelection={selectable}
        disableColumnFilter
        disableColumnMenu
        disableRowSelectionOnClick
        localeText={GRID_DEFAULT_LOCALE_TEXT}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          ...props.initialState,
          pagination: { paginationModel: { pageSize: DEFAULT_PAGE_SIZE } },
        }}
      />
    </Box>
  );
};
