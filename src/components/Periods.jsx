import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Periods extends React.Component{
    render(){
        return(<div>
            Periods placeholder
        </div>)
    }
}

function mapStateToProps(){
    return {
        periods: []
    };
}

export default connect(mapStateToProps, actions)(Periods)