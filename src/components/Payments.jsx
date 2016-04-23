import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component{
    render(){
        return(<div>
            Payments placeholder
        </div>)
    }
}

function mapStateToProps(){
    return {
        payments: []
    };
}

export default connect(mapStateToProps, actions)(Payments)