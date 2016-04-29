import React from 'react';
import {PropTypes, Component} from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

Loader.propTypes={
    message: PropTypes.string.isRequired
};

export default Loader;
