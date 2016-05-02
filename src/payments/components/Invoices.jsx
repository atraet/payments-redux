import React from 'react';
import {connect} from 'react-redux';
import Loader from './Loader.jsx';
import InvoicesCsv from './InvoicesCsv.jsx';

class Invoices extends React.Component {
    render() {

        if(this.props.isFetching){
            return (<Loader message="Loading invoices...." />);
        }

        if(!this.props.invoices.length){
            return null;
        }

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Invoices</h3>
                </div>
                <div className="panel-body">
                    <InvoicesCsv />
                    <ul className="list-group"> {this.props.invoices.map(this.renderInvoice)}</ul>
                </div>
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
        isFetching: state.invoices.isFetching,
        invoices: state.invoices.items
    };
}

export default connect(mapStateToProps)(Invoices)