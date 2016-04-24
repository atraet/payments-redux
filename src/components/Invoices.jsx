import React from 'react';
import {connect} from 'react-redux';

class Invoices extends React.Component {
    render() {
        if(!this.props.invoices.length){
            return null;
        }

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Invoices</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group"> {this.props.invoices.map(this.renderInvoice)}</ul>
                </div>
                <div className="panel-footer"> Selected payment: {this.props.selectedPayment}</div>
            </div>
        )
    }

    renderInvoice(invoice) {
        return (
            <li key={invoice.id} className="list-group-item">
                {invoice.name}
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        invoices: state.invoices || []
    };
}

export default connect(mapStateToProps)(Invoices)