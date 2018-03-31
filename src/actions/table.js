export function tableHasErrored(bool) {
  return {
    type: 'TABLE_HAS_ERRORED',
    hasErrored: bool
  };
}

export function tableIsLoading(bool) {
  return {
    type: 'TABLE_IS_LOADING',
    isLoading: bool
  };
}

export function tableUpdateSuccess(tableData) {
  return {
    type: 'TABLE_UPDATE_SUCCESS',
    tableData
  };
}

function tableSort(sort) {
  return {
    type: 'TABLE_SORT',
    sort
  };
}

function tableSortBy(sortBy) {
  return {
    type: 'TABLE_SORT_BY',
    sortBy
  };
}

function tableUpdate(type, direction) {
  return (dispatch) => {
    dispatch(tableIsLoading(true));
    fetch(`http://localhost:3000/transactions?_sort=${type}&_order=${direction}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(tableIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((tableData) => dispatch(tableUpdateSuccess(tableData)))
      .catch(() => dispatch(tableHasErrored(true)));
  };
}

export function tableUpdateData(type, direction) {
  return (dispatch) => {
    dispatch(tableIsLoading(true));
    dispatch(tableSort(direction));
    dispatch(tableSortBy(type));
    dispatch(tableUpdate(type, direction));
  }
}