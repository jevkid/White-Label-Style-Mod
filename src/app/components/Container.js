import React, { Component } from 'react';

import '../styles/main.less';
import Header from './Headers';
import Button from './Buttons';
import Input from './Inputs';
import Radio from './Radios';
import Checkbox from './Checkboxes';
import Select from './Selects';

class Container extends Component {
  render() {
    var divStyle = {
      display: 'inline-flex',
      padding: '10px 0'
    };

    var dropdownStandard = [
      {'label': 'First Option', 'value': '1'},
      {'label': 'Second Option', 'value': '2'},
      {'label': 'Third Option', 'value': '3'}
    ];

    var dropdownSmall = [
      {'label': '1', 'value': '1'},
      {'label': '2', 'value': '2'},
      {'label': '3', 'value': '3'}
    ];

    return (
      <div className="container">
        <hr></hr>
        <h4>Headers</h4>
        <hr></hr>
        <div style={divStyle}>
         <Header brandName="BRAND NAME" />
        </div>

        <hr></hr>
        <h4>Buttons</h4>
        <hr></hr>
        <div>
          <Button buttonText="Primary" buttonType="primary" />
          <Button buttonText="Secondary" buttonType="secondary" />
          <Button buttonText="Reset" buttonType="clear" />
          <Button buttonText="Small" buttonType="small" />
          <Button buttonText="X-Small" buttonType="x-small" />
        </div>

        <hr></hr>
        <h4>Inputs</h4>
        <hr></hr>
        <div style={divStyle}>
          <Input size="standard" placeholder="Standard" icon="" labelText="Standard Label"/>
          <Input size="small" placeholder="Small" icon="" labelText="Small Label"/>
        </div>

        <hr></hr>
        <h4>Radios</h4>
        <hr></hr>
        <div style={divStyle}>
          <Radio labelText="First radio button" name="radio"/>
          <Radio labelText="Second radio button" name="radio"/>
        </div>

        <hr></hr>
        <h4>Checkboxes</h4>
        <hr></hr>
        <div style={divStyle}>
          <Checkbox labelText="First checkbox" name="check" />
          <Checkbox labelText="Second checkbox" name="check" />
        </div>

        <hr></hr>
        <h4>Dropdowns</h4>
        <hr></hr>
        <div style={divStyle}>
          <Select size="standard" labelText="Standard" options={dropdownStandard} />
          <Select size="small" labelText="Small" options={dropdownSmall} />
        </div>
      </div>
    );
  }
};

export default Container;