import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
    	<div style={{padding: 10}} className="checkbox-group">
  		  <label>{this.props.labelText}</label>
      	<input type="checkbox" name={this.props.name}/>
	    </div>
    );
  }
};

export default Checkbox;