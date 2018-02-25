import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.less';
import Header from './components/Header';
import ButtonStyle from './components/ButtonStyle';

ReactDOM.render(
	<div className="container">
	 	<Header brandName="BRAND NAME" />
		<ButtonStyle buttonText="Submit" buttonType="primary" />
		<ButtonStyle buttonText="Search" buttonType="secondary" />
		<ButtonStyle buttonText="Reset" buttonType="clear" />
		<ButtonStyle buttonText="Select" buttonType="small" />
		<ButtonStyle buttonText="Go" buttonType="x-small" />
	</div>,
  document.querySelectorAll('#rootElement')[0]
);