import React, { Component } from 'react';

import { connect } from 'react-redux';
import { tableUpdateData } from '../../actions/table';

class Table extends Component {

  render() {
    const table = this.props.tableData.length > 0 ? this.props.tableData : this.props.data;
  	const tableRow = table.map((row, index) => 
  				<tr key={index}>
				    <td>{row.Date}</td>
				    <td>{row['Debit/Credit']}</td>
				    <td>{row['Merchant/Description']}</td>
				    <td>{row.Balance}</td>
				  </tr>
		);
    const direction = this.props.sort === 'desc' ? 'asc' : 'desc';

		if (this.props.error) {
      return <p>{error.message}</p>;
    }

    if (this.props.isLoading || table.length <= 0) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
      	<table>
      		<thead>
	      		<tr>
	      			<th><a href="#" onClick={() => this.props.updateData('Date', direction)}>Date</a></th>
	      			<th><a href="#" onClick={() => this.props.updateData('Debit/Credit', direction)}>Amount</a></th>
	      			<th>Description</th>
	      			<th>Balance</th>
	      		</tr>
      		</thead>
      		<tbody>
    				{tableRow}
      		</tbody>
      	</table>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    hasErrored: state.tableHasErrored,
    isLoading: state.tableIsLoading,
    tableData: state.tableData,
    showPagination: state.tableShowPagination,
    numResults: state.tableNumResults,
    sort: state.tableSort,
    sortBy: state.tableSortBy
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (type, direction) => dispatch(tableUpdateData(type, direction))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);