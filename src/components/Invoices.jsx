import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Invoices extends React.Component{
    render(){
        return(<div>
            Invoices placeholder
        </div>)
    }
}

function mapStateToProps(){
    return {
        invoices: []
    };
}

export default connect(mapStateToProps, actions)(Invoices)