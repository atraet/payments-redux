import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPayments();
    }

    render() {
        let onClick = this.props.selectPayment.bind(this, {});
        console.log('onclick', onClick);
        return (
            <div>
                Payments placeholder xxx
                <div>selected payment: {this.props.selectedPayment}</div>
                <ul>{this.props.payments.map(this.renderPayment)}</ul>
            </div>)
    }

    renderPayment(payment) {

        return (
            <li key={payment.id}
                onClick={()=>{}}>
                {payment.id}
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        payments: state.payments || []
    };
}

export default connect(mapStateToProps, actions)(Payments);