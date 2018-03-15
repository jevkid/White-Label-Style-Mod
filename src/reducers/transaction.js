export function transactionHasErrored(state = false, action) {
  switch (action.type) {
    case 'TRANSACTION_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function transactionIsLoading(state = false, action) {
  switch (action.type) {
    case 'TRANSACTION_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function transaction(state = [], action) {
  switch (action.type) {
    case 'TRANSACTION_FETCH_DATA_SUCCESS':
      return action.transaction;
    default:
      return state;
  }
}