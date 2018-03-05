import React, { Component } from 'react';

import Chart from './Chart';
import Table from './Table';
import Header from './Header';

import '../styles/main.less';

class Container extends Component {
	
	constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
  	this.setState({ isLoading: true });

    fetch('http://localhost:3000/transactions')
      .then(response => {
      	if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ transactions: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
  	const { transactions, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading || transactions.length <= 0) {
      return <p>Loading ...</p>;
    }
    
    return (
      <div className="container">
       	<div className="row">
       		<div className="col-xs-12">
       			<Header text="Finance Dashboard" />
       		</div>
	       	<div className="col-xs-8">
	       		<Table data={transactions} />
	       	</div>
	       	<div className="col-xs-4">
	       		<Chart />
	       	</div>
       	</div>
      </div>
    );
  }
};

export default Container;