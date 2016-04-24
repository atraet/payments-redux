import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import Payments from './Payments.jsx';
import Periods from './Periods.jsx';
import Invoices from './Invoices.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Payments - Invoices</h1>
                <Payments />
                <Periods />
                {this.renderInstruction()}
                <Invoices />
            </div>
        );
    }

    renderInstruction() {
        if (this.props.payments.length &&
            (!this.props.selectedPayment || !this.props.selectedPeriod)) {

            return (<div>Please select a payment and a period to view the invoices.</div>)
        }

        return null;
    }
}

function mapStateToProps(state) {
    return {
        payments: state.payments,
        selectedPayment: state.selectedPayment,
        selectedPeriod: state.selectedPeriod
    }
}

export default connect(mapStateToProps)(App);
