import React from 'react';
import {Link} from 'react-router';

class Steps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ul>
                    <li><Link to="/shop/step1">Step 1</Link></li>
                    <li><Link to="/shop/step2">Step 2</Link></li>
                    <li><Link to="/shop/step3">Step 3</Link></li>
                </ul>
            </div>
        )
    }
}

export default Steps;