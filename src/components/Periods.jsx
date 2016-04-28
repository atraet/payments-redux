import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import loadPeriod from './hoc/loadPeriod';

class Periods extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(actions.fetchPeriods());
    }

    render() {

        // // Do not render when payments is loading, OR there is no payments
        // if (this.props.isLoadingPayments || !this.props.payments.length) {
        //     return null;
        // }

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Periods</h3>
                </div>
                <div className="panel-body">
                    <div className="card-list">
                        {this.props.periods.map(period => this.renderPeriod(period))}
                    </div>
                </div>
                <div className="panel-footer">
                    Selected period: {this.props.selectedPeriod}
                </div>
            </div>
        );
    }

    renderPeriod(period) {
        let cssClass = period.type === this.props.selectedPeriod
            ? 'card card-block active'
            : 'card card-block' ;

        return (
            <div key={period.type}
                 onClick={() => this.selectPeriod(period)}
                 className={cssClass}>
                <h5 className="card-title">{period.description}</h5>
            </div>

        );
    }

    selectPeriod(period) {

        const{dispatch} = this.props;

        dispatch(actions.selectPeriod(period.type));

        let selectedPayment = this.props.selectedPayment;

        if (selectedPayment) {
            dispatch(actions.fetchInvoices(selectedPayment, period.type));
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

export default connect(mapStateToProps)(Periods);