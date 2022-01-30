import "./index.css";
import { getUsers } from "../data/api/userApi";
import { Grid } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

/* eslint-disable no-console */
const columnDefs = [
  { field: 'id' },
  { field: 'firstName' },
  { field: 'lastName' },
  { field: 'email' },
  { field: 'city' },
  { field: 'state' },
  { field: 'country' },
];
const rowData = [];
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

getUsers().then((data) => {
  gridOptions.api.setRowData(data);
});

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector('#myGrid');
  new Grid(gridDiv, gridOptions);
});
