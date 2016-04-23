import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Periods extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPeriods();
    }

    render() {
        return (
            <div>
                <div>Selected period: {this.props.selectedPeriod}</div>
                {this.props.periods.map(period => this.renderPeriod(period))}
            </div>
        );
    }

    renderPeriod(period) {
        return (
            <div key={period.type} onClick={() => this.selectPeriod(period)}>
                <button>{period.description}</button>
            </div>
        );
    }

    selectPeriod(period){
        this.props.selectPeriod(period.type);
        this.props.fetchInvoices();
    }
}

function mapStateToProps(state) {
    return {
        periods: state.periods,
        selectedPeriod: state.selectedPeriod
    };
}

export default connect(mapStateToProps, actions)(Periods)