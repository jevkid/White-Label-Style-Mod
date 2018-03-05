import React, { Component } from 'react';

class Select extends Component {
  render() {
    const options = this.props.options.map((option, index) =>
      <option key={index} value={option.value}>{option.label}</option>
    );

    return (
    	<div style={{padding: 10}} className="select-group">
  		  <label>{this.props.labelText}</label>
      	<select className={"select-" + this.props.size}>
          {options}
        </select>
	    </div>
    );
  }
};

export default Select;