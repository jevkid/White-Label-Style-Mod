import { combineReducers } from 'redux';

import { transaction, transactionHasErrored, transactionIsLoading } from './transaction';
import { tableData, tableHasErrored, tableIsLoading, tableShowPagination, tableNumResults, tableSort, tableSortBy } from './table';

export default combineReducers({
    transaction,
    transactionHasErrored,
    transactionIsLoading,
    tableData,
    tableHasErrored,
    tableIsLoading,
    tableShowPagination,
    tableNumResults,
    tableSort,
    tableSortBy
});