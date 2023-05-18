
import React, { Component } from 'react';

import './LineWrapper.css';


class LineWrapper extends Component {
    render() {
        return (
            <div classNameName="line-wrapper">
                <div className="line-output">
                    <div className="title-wrapper">
                        <div className="title">Tip Amount</div>
                        <div className="desc">/ person</div>
                    </div>
                    <div className="value">$0.00</div>
                </div>
            </div>
        );
    }
}

export default LineWrapper;