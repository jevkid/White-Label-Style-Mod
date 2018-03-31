import React, { Component } from 'react';

import { connect } from 'react-redux';
import { transactionFetchData } from '../actions/transaction';


import Chart from './Chart';
import Table from './Table';
import Header from './Header';

import '../styles/main.less';

class Container extends Component {
	
	componentDidMount() {
    this.props.fetchData('http://localhost:3000/transactions');
  }

  render() {
  	if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading transactions</p>;
    }

    if (this.props.isLoading || this.props.transaction.length <= 0) {
      return <p>Loading ...</p>;
    }
    
    return (
      <div className="container">
       	<div className="row">
       		<div className="col-12">
       			<Header text="Finance Dashboard" />            
       		</div>
	       	<div className="col-8">
	       		<Table data={this.props.transaction} />
	       	</div>
	       	<div className="col-4">
	       		<Chart data={[5,10,1,3]} size={[500,500]} />
	       	</div>
       	</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
    hasErrored: state.transactionHasErrored,
    isLoading: state.transactionIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(transactionFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
