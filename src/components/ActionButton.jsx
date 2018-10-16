import React, { Component } from 'react';

class ActionButton extends Component {

    render() {
        const {onclick, action, displayValue} = this.props;

        return (
            <div>
                <button onClick={() => onclick(action)}>{displayValue}</button>
            </div>
        );
    }
}

export default ActionButton;