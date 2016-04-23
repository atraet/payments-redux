import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
    componentWillMount() {
        this.props.fetchPayments();
    }

    render() {
        return (<div>
            Payments placeholder xxx
            <ul>{this.props.payments.map(this.renderPayment)}</ul>
        </div>)
    }

    renderPayment(payment) {
        return (
            <li key={payment.id}>{payment.id}</li>
        )
    }
}

function mapStateToProps(state) {
    return {
        payments: state.payments || []
    };
}

export default connect(mapStateToProps, actions)(Payments)