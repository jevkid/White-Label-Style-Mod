import React, { Component } from 'react';

class Table extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	isLoading: false,
    	error: null,
    	tableData: this.props.data,
      showPagination: true,
      results: 10,
      sort: 'desc',
      sortBy: 'Date'
    };
  }
	
  updateTable(type, direction) {
    fetch(`http://localhost:3000/transactions?_sort=${type}&_order=${direction}`)
      .then(response => {
      	if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ tableData: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
	}

	updateSort(e, type, direction) {
		e.preventDefault();
		this.setState({sort: direction, sortBy: type});
		this.updateTable(type, direction);
	}

  render() {	
  	const { tableData, isLoading, error } = this.state;

  	const tableRow = tableData.map((row) => 
  				<tr>
				    <td key={row.Date}>{row.Date}</td>
				    <td key={row['Debit/Credit']}>{row['Debit/Credit']}</td>
				    <td key={row['Merchant/Description']}>{row['Merchant/Description']}</td>
				    <td key={row.Balance}>{row.Balance}</td>
				  </tr>
		);

		const direction = this.state.sort === 'desc' ? 'asc' : 'desc';

		if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading || tableData.length <= 0) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
      	<table>
      		<thead>
	      		<tr>
	      			<th><a href="#" onClick={(e) => this.updateSort(e, 'Date', direction)}>Date</a></th>
	      			<th><a href="#" onClick={(e) => this.updateSort(e, 'Debit/Credit', direction)}>Amount</a></th>
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

export default Table;