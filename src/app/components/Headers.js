import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<div>    		
        <h1> Hello, {this.props.brandName} </h1>
        <h2> Here you can view what styles will look like for {this.props.brandName} </h2>
        <h3> This, for example, is an <code>h3</code> </h3>
        <h4> Now, an <code>h4</code> </h4>
        <h5> Lastly, an <code>h5</code> </h5>
      </div>

    );
  }
};

export default Header;