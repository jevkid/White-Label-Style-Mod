import { combineReducers } from 'redux';

import { transaction, transactionHasErrored, transactionIsLoading } from './transaction';

export default combineReducers({
    transaction,
    transactionHasErrored,
    transactionIsLoading
});