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
            <div key={period.type} onClick={() => this.props.selectPeriod(period.type)}>
                <button>{period.description}</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        periods: state.periods,
        selectedPeriod: state.selectedPeriod
    };
}

export default connect(mapStateToProps, actions)(Periods)