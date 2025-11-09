/// <reference path="./crud.d.ts" />

// Import your own types
import { RowID, RowElement } from './interface';

// Import all functions from crud.js
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row into the "database"
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with a new field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update the database row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row from the "database"
CRUD.deleteRow(newRowID);
