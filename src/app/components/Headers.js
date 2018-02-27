import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<div style={{padding: 10}}>
        <h1> <code>h1</code> Hello, {this.props.brandName} </h1>
        <h2> <code>h2</code> Here you can view what styles will look like for {this.props.brandName}. </h2>
        <h3> <code>h3</code> This way you can test things before adding them to the actual site.  </h3>
        <h4> <code>h4</code> Hopefully this is somewhat helpful! </h4>
        <h5> <code>h5</code> If not, srrrrrry. </h5>
      </div>

    );
  }
};

export default Header;