export function transactionHasErrored(bool) {
  return {
    type: 'TRANSACTION_HAS_ERRORED',
    hasErrored: bool
  };
}

export function transactionIsLoading(bool) {
  return {
    type: 'TRANSACTION_IS_LOADING',
    isLoading: bool
  };
}

export function transactionFetchDataSuccess(transaction) {
  return {
    type: 'TRANSACTION_FETCH_DATA_SUCCESS',
    story
  };
}

export function transactionFetchData(url) {
  return (dispatch) => {
    dispatch(transactionIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(transactionIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((transaction) => dispatch(transactionFetchDataSuccess(transaction)))
      .catch(() => dispatch(transactionHasErrored(true)));
  };
}