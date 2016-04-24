import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Loader from './Loader.jsx';

class Payments extends React.Component {
    constructor(props) {
        super(props);

        // Todo: remove setTimeout
        this.props.turnOnPaymentLoader();

        setTimeout(() =>{
            this.props.fetchPayments();
            this.props.turnOffPaymentLoader();
        }, 3000);
    }

    render() {

        if(this.props.isLoadingPayments){
            console.log(`Payments.render.isLoadingPayments: ${this.props.isLoadingPayments}`);
            return <Loader />;
        }

        if(!this.props.payments.length){
            return this.renderWhenNoPayments();
        }

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

    renderWhenNoPayments(){
        return(<div>You do not have payments yet.</div>);
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