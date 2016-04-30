import React from 'react';
import Header from '../../shared/Header.jsx';
import Steps from './Steps.jsx'

class ShopApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <h2>Shop</h2>
                    <Steps />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ShopApp;