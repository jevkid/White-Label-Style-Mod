import React from 'react';
import ReactDOM from 'react-dom';

import 'Header.js;
import ButtonStyle from 'Button';

class Container extends Component {
  render() {
    return (
    	<div>
      	 	<Header titleText="BRAND NAME" />
  			<ButtonStyle buttonText="Select" />
  		</div>
    );
  }
};

export default Container;