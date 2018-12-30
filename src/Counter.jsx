import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import CounterButton from './components/CounterButton';
import { actions, modes, config } from './variables/global';
import Tally from './components/Tally';
import './css/counter.css';
import History from './components/History';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            mode: modes.ADDITION,
            history: []
        }
    }

    onActionClick = (action) => {
        switch(action){
            case actions.MODE:
                this.switchMode();
                break;
            case actions.UNDO:
                this.undo();
                break;
            default:
                break;    
        }   
    }

    onCounterClick = (value) => {
        let {mode,counter} = this.state;
        let result = eval(counter.toString() + mode.operator + value.toString());

        if(result > config.COUNTERLIMIT[0] && result < config.COUNTERLIMIT[1]){
            this.setState({
                ...this.state,
                counter: result,
                history: this.state.history.concat([{mode: mode, origin: counter, value: value, result: result, time: new Date().getTime()}]),
            })
        }else{
           //Counter limit reached
        }
    }

    undo = () => {
        let {history} = this.state;
        let historyCopy = history;
        let {origin} = history.length > 0 ? historyCopy.pop() : {origin: 0};

        this.setState({
            ...this.state,
            counter: origin,
            history: historyCopy
        })
    }
    
    switchMode = () => {
        let currentMode = this.state.mode;
        switch(currentMode){
            case modes.ADDITION:
                this.setState({
                    ...this.state,
                    mode: modes.SUBSTRACTION
                });
                return modes.SUBSTRACTION;
            case modes.SUBSTRACTION:
                this.setState({
                    ...this.state,
                    mode: modes.MULTIPLICATION
                });
                return modes.MULTIPLICATION;
            case modes.MULTIPLICATION:
                this.setState({
                    ...this.state,
                    mode: modes.DIVISION
                });
                return modes.DIVISION;
            case modes.DIVISION:
                this.setState({
                    ...this.state,
                    mode: modes.ADDITION
                });
                return modes.ADDITION
            default:
                return modes.ADDITION
        }
    }
    

    getNextMode = (mode) => {
        switch(mode){
            case modes.ADDITION:
                return modes.SUBSTRACTION;
            case modes.SUBSTRACTION:
                return modes.MULTIPLICATION;
            case modes.MULTIPLICATION:
                return modes.DIVISION;
            case modes.DIVISION:
                return modes.ADDITION;
            default:
                return '';
        }
    }

    render() {
        return (
            <div className="counter">
                <div className="tallyWrapper">
                    <Tally count={this.state.counter} />
                </div>
                <div className='counterWrapper'>
                    <h1 className='counterValue'>{this.state.counter}</h1>
                </div>
                <div className="buttons">
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={1} />
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={2} />
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={3} />
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={5} />
                    <div className="actions">
                        <ActionButton onclick={(action) => this.onActionClick(action)} action={actions.UNDO} displayValue={actions.UNDO.icon} />
                        <ActionButton onclick={(action) => this.onActionClick(action)} action={actions.MODE} displayValue={this.state.mode.icon} />
                    </div>
                </div>
                <div className="historyWrapper">
                    <History history={this.state.history} />
                </div>
            </div>
        );
    }
}

export default Counter;