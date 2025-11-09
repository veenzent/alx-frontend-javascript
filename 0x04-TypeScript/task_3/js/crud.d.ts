import {ROWID, ROWElement} from './interface.js';


// Declare the function types for crud.js
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;