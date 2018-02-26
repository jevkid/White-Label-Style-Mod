import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
    	<div>
	      <input className={"form-field " + this.props.size} placeholder={this.props.placeholder} />
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