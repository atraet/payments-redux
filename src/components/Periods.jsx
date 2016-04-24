import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import loadPeriod from './hoc/loadPeriod';

class Periods extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchPeriods();
    }

    render() {

        // Do not render when payments is loading, OR there is no payments
        if (this.props.isLoadingPayments || !this.props.payments.length) {
            return null;
        }

        return (
            <div>
                <div>Selected period: {this.props.selectedPeriod}</div>
                {this.props.periods.map(period => this.renderPeriod(period))}
            </div>
        );
    }

    renderPeriod(period) {
        return (
            <div key={period.type} onClick={() => this.selectPeriod(period)}>
                <button>{period.description}</button>
            </div>
        );
    }

    selectPeriod(period) {
        this.props.selectPeriod(period.type);

        let selectedPayment = this.props.selectedPayment;

        if (selectedPayment) {
            this.props.fetchInvoices(selectedPayment, period.type);
        }
    }
}

function mapStateToProps(state) {
    return {
        periods: state.periods,
        selectedPeriod: state.selectedPeriod,
        payments: state.payments,
        isLoadingPayments: state.isLoadingPayments,
        selectedPayment: state.selectedPayment
    };
}

export default connect(mapStateToProps, actions)(Periods);