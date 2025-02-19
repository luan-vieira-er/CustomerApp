import { DataGridProps } from '@mui/x-data-grid';

export interface ITableProps extends DataGridProps {
  selectable?: boolean;
  height?: number;
}
