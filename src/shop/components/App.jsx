import React from 'react';
import Header from '../../shared/Header.jsx';

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
                </div>
            </div>
        )
    }
}

export default ShopApp;