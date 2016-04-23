import React from 'react';
import {connect} from 'react-redux';

class Invoices extends React.Component {
    render() {
        return (<div>
            <ul>
                {this.props.invoices.map(this.renderInvoice)}
            </ul>
        </div>)
    }

    renderInvoice(invoice) {
        return (
            <li key={invoice.id}>{invoice.name}</li>
        )
    }
}

function mapStateToProps(state) {
    return {
        invoices: state.invoices || []
    };
}

export default connect(mapStateToProps)(Invoices)