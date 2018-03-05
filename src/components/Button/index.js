import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className={"button-" + this.props.buttonType}>{this.props.buttonText}</button>
    );
  }
};

export default Button;