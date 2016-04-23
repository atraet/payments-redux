import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPayments();
    }

    render() {
        return (
            <div>
                <div>selected payment: {this.props.selectedPayment}</div>
                <ul>{this.props.payments.map(payment => this.renderPayment(payment))}</ul>
            </div>)
    }

    renderPayment(payment) {
        return (
            <li key={payment.id}
                onClick={()=>{ this.selectPayment(payment)}}>
                {payment.id}
            </li>
        )
    }

    selectPayment(payment) {
        this.props.selectPayment(payment.id)

        let selectedPeriod = this.props.selectedPeriod;

        if (selectedPeriod) {
            this.props.fetchInvoices(payment.id, selectedPeriod);
        }
    }
}


function mapStateToProps(state) {
    return {
        payments: state.payments || [],
        selectedPayment: state.selectedPayment,
        selectedPeriod: state.selectedPeriod
    };
}

export default connect(mapStateToProps, actions)(Payments);