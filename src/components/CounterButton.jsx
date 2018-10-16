import React, { Component } from 'react';

class CounterButton extends Component {
    render() {
        const {onclick, value} = this.props;

        return (
            <div>
                <button onClick={() => onclick(value)}>{value}</button>
            </div>
        );
    }
}

export default CounterButton;