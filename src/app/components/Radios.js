import React, { Component } from 'react';

class Radio extends Component {
  render() {
    return (
    	<div style={{padding: 10}} className="radio-group">
  		  <label>{this.props.labelText}</label>
      	<input type="radio" name={this.props.name}/>
	    </div>
    );
  }
};

export default Radio;