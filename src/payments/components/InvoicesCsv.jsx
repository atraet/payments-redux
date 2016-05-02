import React from 'react';
import {connect} from 'react-redux';
import {fetchInvoicesCsv} from '../actions/index';
import DateUtil from '../models/PaymentInvoicePeriod';
import Loader from './Loader.jsx';

class InvoicesCsv extends React.Component {
    constructor(props) {
        super(props);
        this.downloadCsv = this.downloadCsv.bind(this);
    }

    render() {

        if (this.props.isFetching) {
            return <Loader message="Downloading csv...."/>
        }

        let now = new Date();
        let thisMonth = DateUtil.getMonthName(now.getMonth());

        return (
            <div>
                <div className="link link--download has-margin-bottom"
                     onClick={this.downloadCsv}>
                    Download bestedingen {thisMonth} {now.getFullYear()}
                </div>
                {this.renderCsv()}
            </div>
        )
    }

    downloadCsv() {
        let csvLink = `https://dbtst0.test.vvk.kvk.nl/XXXX`;
        const {dispatch} = this.props;
        dispatch(fetchInvoicesCsv(csvLink));
    }

    renderCsv() {
        if (this.props.csv) {
            var data = new Blob([this.props.csv], {type: 'text/csv'});
            var csvURL = window.URL.createObjectURL(data);
            saveCsv(csvURL, 'bestedingen.csv');
        } else {
            return false;
        }
    }
}

function saveCsv(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); //Firefox requires the link to be in the body
        link.download = filename;
        link.href = uri;
        link.click();
        document.body.removeChild(link); //remove the link when done
    } else {
        location.replace(uri);
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.invoicesCsv.isFetching,
        csv: state.invoicesCsv.csv
    };
}

export default connect(mapStateToProps)(InvoicesCsv);