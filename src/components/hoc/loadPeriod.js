import React from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class LoadPeriod extends React.Component {
        render() {
            var canRender = !this.props.isLoading && this.props.payments.length;

            return canRender
                ? <ComposedComponent {...this.props}/>
                : null;
        }
    }

    function mapStateToProps(state) {
        return {
            isLoading: state.isLoading || true,
            payments: state.payments
        };
    }

    return connect(mapStateToProps)(LoadPeriod);
}