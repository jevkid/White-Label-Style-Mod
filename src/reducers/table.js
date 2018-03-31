export function tableHasErrored(state = false, action) {
  switch (action.type) {
    case 'TABLE_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function tableIsLoading(state = false, action) {
  switch (action.type) {
    case 'TABLE_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function tableData(state = [], action) {
  switch (action.type) {
    case 'TABLE_UPDATE_SUCCESS':
      return action.tableData;
    default:
      return state;
  }
}
export function tableShowPagination(state = true, action) {
  switch (action.type) {
    case 'TABLE_SHOW_PAGINATION':
      return action.showPagination;
    default:
      return state;
  }
}
export function tableNumResults(state = 10, action) {
  switch (action.type) {
    case 'TABLE_NUM_RESULTS':
      return action.numResults;
    default:
      return state;
  }
}
export function tableSort(state = 'desc', action) {
  switch (action.type) {
    case 'TABLE_SORT':
      return action.sort;
    default:
      return state;
  }
}
export function tableSortBy(state = 'Date', action) {
  switch (action.type) {
    case 'TABLE_SORT_BY':
      return action.sortBy;
    default:
      return state;
  }
}