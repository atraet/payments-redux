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
                onClick={()=>{ this.props.selectPayment(payment.id)}}>
                {payment.id}
            </li>
        )
    }
}


function mapStateToProps(state) {
    return {
        payments: state.payments || [],
        selectedPayment: state.selectedPayment
    };
}

export default connect(mapStateToProps, actions)(Payments);