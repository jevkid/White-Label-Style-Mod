import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.less';
import Header from './components/Header';
import ButtonStyle from './components/ButtonStyle';

ReactDOM.render(
	<div className="container">
	  <Header titleText="BRAND NAME" />
	  <ButtonStyle buttonText="Submit" buttonType="primary"/>
	</div>,
  document.querySelectorAll('#rootElement')[0]
);