import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import Rx from 'rxjs/Rx';

import * as actions from '../actions/index';
import Header from '../../shared/Header.jsx';

import Payments from './Payments.jsx';
import Periods from './Periods.jsx';
import Invoices from './Invoices.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.payments.length === 1
            && this.props.selectedPayment != nextProps.selectedPayment
            && this.props.selectedPeriod != nextProps.selectedPeriod) {

            const {dispatch} = nextProps;

            dispatch(actions.fetchInvoices(nextProps.selectedPayment, nextProps.selectedPeriod));
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Payments - Invoices</h1>
                    <Payments />
                    <Periods />
                    {this.renderInstruction()}
                    <Invoices />
                </div>
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
        isFetchingPayments: state.payments.isFetching,
        payments: state.payments.items,
        selectedPayment: state.selectedPayment,
        selectedPeriod: state.selectedPeriod
    }
}

export default connect(mapStateToProps)(App);
