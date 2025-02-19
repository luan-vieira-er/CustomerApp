import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { theme } from 'styles/constants';

export const StyledDataGrid = styled(DataGrid)(() => ({
  '&': {
    border: 0,
    borderRadius: '4px 4px 0 0',
  },
  '& .MuiDataGrid-main': {
    backgroundColor: `${theme.Colors.Primary.white}`,
    color: `${theme.Colors.Primary.darkGrey100}`,
    fontWeight: 700,
    borderRadius: '4px 4px 0 0',
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700,
      color: `${theme.Colors.Primary.primaryOrange}`,
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-row:nth-of-type(2n + 1)': {
      backgroundColor: `${theme.Colors.Primary.white}`,
    },
    '& .MuiDataGrid-row:nth-of-type(2n)': {
      backgroundColor: `${theme.Colors.Primary.darkGrey50}`,
    },
    '& .MuiDataGrid-withBorderColor': {
      border: 0,
    },
    '& .MuiCheckbox-root svg': {
      fontSize: `12 px`,
    },
    '& .MuiDataGrid-checkboxInput': {
      color: '#E4E4E7',
      ':hover': {
        backgroundColor: '#4F4F4F20',
      },
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
      width: '10px',
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      background:
        'linear-gradient(113.77deg, rgba(139, 137, 137, 0.4) -5.83%, rgba(255, 255, 255, 0.05) 101.54%);',
    },
  },
}));
