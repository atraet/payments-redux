import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand"><Link to="/">My App</Link></span>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Payments</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><a href="/shop.html">Shop 2</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;