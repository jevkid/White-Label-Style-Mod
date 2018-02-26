import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.less';
import Header from './components/Headers';
import Button from './components/Buttons';
import Input from './components/Inputs';

ReactDOM.render(
	<div className="container">
	 	<Header brandName="BRAND NAME" />
		<Button buttonText="Primary" buttonType="primary" />
		<Button buttonText="Secondary" buttonType="secondary" />
		<Button buttonText="Reset" buttonType="clear" />
		<Button buttonText="Small" buttonType="small" />
		<Button buttonText="X-Small" buttonType="x-small" />
		<Input type="text" size="standard" placeholder="Standard input" icon=""/>
		<Input type="text" size="small" placeholder="Small input" icon=""/>
	</div>,
  document.querySelectorAll('#rootElement')[0]
);