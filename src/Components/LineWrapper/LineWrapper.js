
import React, { Component } from 'react';

import './LineWrapper.css';


class LineWrapper extends Component {
    render() {
        return (
            <div className="line-wrapper">
                <div class="line-output">
                    <div class="title-wrapper">
                        <div class="title">Tip Amount</div>
                        <div class="desc">/ person</div>
                    </div>
                    <div class="value">$0.00</div>
                </div>
            </div>
        );
    }
}

export default LineWrapper;