import { GridLocaleText } from '@mui/x-data-grid/models/api/gridLocaleTextApi';

export const GRID_DEFAULT_LOCALE_TEXT: GridLocaleText = {
  // Root
  noRowsLabel: 'Nenhum resultado',
  noResultsOverlayLabel: 'Nenhum resultado encontrado.',

  // Density selector toolbar button text
  toolbarDensity: 'Density',
  toolbarDensityLabel: 'Density',
  toolbarDensityCompact: 'Compact',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comfortable',

  // Columns selector toolbar button text
  toolbarColumns: 'Colunas',
  toolbarColumnsLabel: 'Colunas selecionadas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Exibir filtros',
  toolbarFiltersTooltipHide: 'Esconder filtros',
  toolbarFiltersTooltipShow: 'Exibir filtros',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Buscar...',
  toolbarQuickFilterLabel: 'Buscar',
  toolbarQuickFilterDeleteIconLabel: 'Limpar',

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Download como CSV',
  toolbarExportPrint: 'Imprimir',
  toolbarExportExcel: 'Download como Excel',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Buscar coluna',
  columnsPanelTextFieldPlaceholder: 'Titulo da coluna',
  columnsPanelDragIconLabel: 'Reordenar coluna',
  columnsPanelShowAllButton: 'Exibir tudo',
  columnsPanelHideAllButton: 'Esconder tudo',

  // Filter panel text
  filterPanelAddFilter: 'Add filter',
  filterPanelRemoveAll: 'Remove all',
  filterPanelDeleteIconLabel: 'Delete',
  filterPanelLogicOperator: 'Logic operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'And',
  filterPanelOperatorOr: 'Or',
  filterPanelColumns: 'Columns',
  filterPanelInputLabel: 'Value',
  filterPanelInputPlaceholder: 'Filter value',

  // Filter operators text
  filterOperatorContains: 'contains',
  filterOperatorEquals: 'equals',
  filterOperatorStartsWith: 'starts with',
  filterOperatorEndsWith: 'ends with',
  filterOperatorIs: 'is',
  filterOperatorNot: 'is not',
  filterOperatorAfter: 'is after',
  filterOperatorOnOrAfter: 'is on or after',
  filterOperatorBefore: 'is before',
  filterOperatorOnOrBefore: 'is on or before',
  filterOperatorIsEmpty: 'is empty',
  filterOperatorIsNotEmpty: 'is not empty',
  filterOperatorIsAnyOf: 'is any of',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Contains',
  headerFilterOperatorEquals: 'Equals',
  headerFilterOperatorStartsWith: 'Starts with',
  headerFilterOperatorEndsWith: 'Ends with',
  headerFilterOperatorIs: 'Is',
  headerFilterOperatorNot: 'Is not',
  headerFilterOperatorAfter: 'Is after',
  headerFilterOperatorOnOrAfter: 'Is on or after',
  headerFilterOperatorBefore: 'Is before',
  headerFilterOperatorOnOrBefore: 'Is on or before',
  headerFilterOperatorIsEmpty: 'Is empty',
  headerFilterOperatorIsNotEmpty: 'Is not empty',
  headerFilterOperatorIsAnyOf: 'Is any of',
  'headerFilterOperator=': 'Equals',
  'headerFilterOperator!=': 'Not equals',
  'headerFilterOperator>': 'Greater than',
  'headerFilterOperator>=': 'Greater than or equal to',
  'headerFilterOperator<': 'Less than',
  'headerFilterOperator<=': 'Less than or equal to',

  // Filter values text
  filterValueAny: 'any',
  filterValueTrue: 'true',
  filterValueFalse: 'false',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuShowColumns: 'Show columns',
  columnMenuManageColumns: 'Manage columns',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Hide column',
  columnMenuUnsort: 'Unsort',
  columnMenuSortAsc: 'Sort by ASC',
  columnMenuSortDesc: 'Sort by DESC',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: 'Show filters',
  columnHeaderSortIconLabel: 'Sort',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} rows selected`
      : `${count.toLocaleString()} row selected`,

  // Total row amount footer text
  footerTotalRows: 'Total de itens:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Checkbox selection',
  checkboxSelectionSelectAllRows: 'Select all rows',
  checkboxSelectionUnselectAllRows: 'Unselect all rows',
  checkboxSelectionSelectRow: 'Select row',
  checkboxSelectionUnselectRow: 'Unselect row',

  // Boolean cell text
  booleanCellTrueLabel: 'yes',
  booleanCellFalseLabel: 'no',

  // Actions cell more text
  actionsCellMore: 'more',

  // Column pinning text
  pinToLeft: 'Pin to left',
  pinToRight: 'Pin to right',
  unpin: 'Unpin',

  // Tree Data
  treeDataGroupingHeaderName: 'Group',
  treeDataExpand: 'see children',
  treeDataCollapse: 'hide children',

  // Grouping columns
  groupingColumnHeaderName: 'Group',
  groupColumn: (name) => `Group by ${name}`,
  unGroupColumn: (name) => `Stop grouping by ${name}`,

  // Master/detail
  detailPanelToggle: 'Detail panel toggle',
  expandDetailPanel: 'Expand',
  collapseDetailPanel: 'Collapse',

  // Used core components translation keys
  MuiTablePagination: {
    labelDisplayedRows: ({ from, to, count }) => `${from} - ${to} de ${count}`,
    labelRowsPerPage: 'Registros por página:',
  },

  // Row reordering text
  rowReorderingHeaderName: 'Row reordering',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregation',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'avg',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'size',
};
