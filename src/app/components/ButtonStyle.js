import React, { Component } from 'react';

class ButtonStyle extends Component {
  render() {
    return (
      <button className={"button-" + this.props.buttonType}>{this.props.buttonText}</button>
    );
  }
};

export default ButtonStyle;