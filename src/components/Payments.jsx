import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Loader from './Loader.jsx';

class Payments extends React.Component {
    constructor(props) {
        super(props);

        // Todo: remove setTimeout
        this.props.turnOnPaymentLoader();

        setTimeout(() => {
            this.props.fetchPayments();
            this.props.turnOffPaymentLoader();
        }, 1000);
    }

    render() {

        if (this.props.isLoadingPayments) {
            console.log(`Payments.render.isLoadingPayments: ${this.props.isLoadingPayments}`);
            return <Loader />;
        }

        if (!this.props.payments.length) {
            return this.renderWhenNoPayments();
        }

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Payments</h3>
                </div>
                <div className="panel-body">
                    <table className="table  table-hover">
                        <tbody>
                            {this.props.payments.map(payment => this.renderPayment(payment))}
                        </tbody>
                    </table>
                </div>
                <div className="panel-footer"> Selected payment: {this.props.selectedPayment}</div>
            </div>)
    }

    renderPayment(payment) {
        let active = payment.id === this.props.selectedPayment
            ? 'success'
            : '';

        return (
            <tr key={payment.id}
                onClick={()=>{ this.selectPayment(payment)}}
                className={active}>
                <td>{payment.billingName}</td>
                <td>{payment.accountNumber}</td>
                <td>{payment.type}</td>
                <td>{payment.id}</td>
            </tr>

        )
    }

    renderWhenNoPayments() {
        return (<div>You do not have payments yet.</div>);
    }

    selectPayment(payment) {
        this.props.selectPayment(payment.id);

        let selectedPeriod = this.props.selectedPeriod;

        if (selectedPeriod) {
            this.props.fetchInvoices(payment.id, selectedPeriod);
        }
    }
}


function mapStateToProps(state) {
    return {
        payments: state.payments || [],
        isLoadingPayments: state.isLoadingPayments,
        selectedPayment: state.selectedPayment,
        selectedPeriod: state.selectedPeriod
    };
}

export default connect(mapStateToProps, actions)(Payments);