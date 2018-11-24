import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import CounterButton from './components/CounterButton';
import { actions, modes, config } from './variables/global';
import Tally from './components/Tally';
import './css/counter.css';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            mode: modes.ADDITION,
        }
    }

    onActionClick = (action) => {
        switch(action){
            case actions.MODE:
                this.switchMode();
                break;
            case actions.UNDOw:
                break;
            default:
                break;    
        }   
    }

    onCounterClick = (value) => {
        let {mode,counter} = this.state;
        switch(mode){
            case modes.ADDITION:
                if(counter+value < config.COUNTERLIMIT){
                    this.setState({
                        ...this.state,
                        counter: counter+value,
                    })
                }else{
                    console.log("Counter limit reached!");
                }
                break;
            case modes.SUBSTRACTION:
                this.setState({
                    ...this.state,
                    counter: counter-value,
                })
                break;
            case modes.MULTIPLICATION:
                if(counter*value < config.COUNTERLIMIT){
                    this.setState({
                        ...this.state,
                        counter: counter*value,
                    })
                }else{
                    console.log("Counter limit reached!")
                }
                break;
            case modes.DIVISION:
                this.setState({
                    ...this.state,
                    counter: counter/value,
                })
                break;
            default:
                break;
        }
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
            <div>
                <div className="tallyWrapper">
                    <Tally count={this.state.counter} />
                </div>
                <h1 className='counterValue'>{this.state.counter}</h1>
                <div className="buttons">
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={1} />
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={2} />
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={3} />
                    <CounterButton onclick={(value) => this.onCounterClick(value)} value={5} />
                    <ActionButton onclick={(action) => this.onActionClick(action)} action={actions.UNDO} displayValue={actions.UNDO.icon} />
                    <ActionButton onclick={(action) => this.onActionClick(action)} action={actions.MODE} displayValue={this.state.mode.icon} />
                </div>
                
            </div>
        );
    }
}

export default Counter;