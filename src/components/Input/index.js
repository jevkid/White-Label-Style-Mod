import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
    	<div style={{padding: 10}} className="form-group">
  		  <label>{this.props.labelText}</label>
      	<input type="text" className={"form-field-" + this.props.size} placeholder={this.props.placeholder} />
	      {this.props.icon.length > 0 &&
	      	<span className="input-icon">
	      		<i className="fa fa-user"></i>
	      	</span>
	      }
	    </div>
    );
  }
};

export default Input;