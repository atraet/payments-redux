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
        if (this.props.selectedPayment && this.props.selectedPeriod) {
            return (<div></div>);
        }

        return (<div>Please select a payment and a period to view the invoices.</div>)
    }
}

function mapStateToProps(state) {
    return {
        selectedPayment: state.selectedPayment,
        selectedPeriod: state.selectedPeriod
    }
}

export default connect(mapStateToProps)(App);
