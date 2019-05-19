import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import FirstPageIcon from '../icons/FirstPage';
import LastPageIcon from '../icons/LastPage';
import LeftIcon from '../icons/Left';
import RightIcon from '../icons/Right';

export const propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  selectableRows: PropTypes.bool,
  expandableRows: PropTypes.bool,
  keyField: PropTypes.string,
  progressPending: PropTypes.bool,
  progressComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  progressCentered: PropTypes.bool,
  expandableRowsComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  selectableRowsComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  selectableRowsComponentProps: PropTypes.object,
  customTheme: PropTypes.object,
  sortIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  striped: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  pointerOnHover: PropTypes.bool,
  onSort: PropTypes.func,
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  contextTitle: PropTypes.string,
  contextActions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onTableUpdate: PropTypes.func,
  clearSelectedRows: PropTypes.bool,
  defaultSortField: PropTypes.string,
  defaultSortAsc: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  responsive: PropTypes.bool,
  overflowY: PropTypes.bool,
  overflowYOffset: PropTypes.string,
  noDataComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
  noHeader: PropTypes.bool,
  subHeader: PropTypes.bool,
  subHeaderAlign: PropTypes.string,
  subHeaderWrap: PropTypes.bool,
  subHeaderComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  onRowClicked: PropTypes.func,
  fixedHeader: PropTypes.bool,
  pagination: PropTypes.bool,
  paginationTotalRows: PropTypes.number,
  paginationPerPage: PropTypes.number,
  paginationRowsPerPageOptions: PropTypes.array,
  paginationText: PropTypes.string,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  paginationComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
};

export const defaultProps = {
  title: '',
  keyField: 'id',
  selectableRows: false,
  expandableRows: false,
  progressPending: false,
  progressComponent: <h2>Loading...</h2>,
  progressCentered: false,
  expandableRowsComponent: <div>Add a custom expander component. Use props.data for row data</div>,
  selectableRowsComponent: 'input',
  selectableRowsComponentProps: {},
  customTheme: {},
  sortIcon: false,
  striped: false,
  highlightOnHover: false,
  pointerOnHover: false,
  onSort: null,
  contextTitle: '',
  contextActions: [],
  onTableUpdate: null,
  clearSelectedRows: false,
  defaultSortField: null,
  defaultSortAsc: true,
  columns: [],
  data: [],
  className: null,
  style: {},
  responsive: true,
  overflowY: false,
  overflowYOffset: '250px',
  noDataComponent: 'There are no records to display',
  disabled: false,
  noHeader: false,
  subHeader: false,
  subHeaderAlign: 'right',
  subHeaderWrap: true,
  subHeaderComponent: [],
  onRowClicked: null,
  fixedHeader: false,
  pagination: false,
  paginationTotalRows: 0,
  paginationPerPage: 10,
  paginationRowsPerPageOptions: [10, 15, 20, 25, 30],
  paginationText: 'Rows per page:',
  onChangePage: null,
  onChangeRowsPerPage: null,
  paginationComponent: Pagination,
  paginationIconFirstPage: <FirstPageIcon />,
  paginationIconLastPage: <LastPageIcon />,
  paginationIconNext: <RightIcon />,
  paginationIconPrevious: <LeftIcon />,
};
