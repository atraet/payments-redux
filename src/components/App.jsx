import React from 'react';
import { Component } from 'react';

import Payments from './Payments.jsx';
import Periods from './Periods.jsx';
import Invoices from './Invoices.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Payments - Invoices</h1>
        <Payments />
        <Periods />
        <Invoices />
      </div>
    );
  }
}
