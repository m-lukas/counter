import React, { Component } from 'react';
import '../css/history.css'
import HistoryCard from './HistoryCard';

class History extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }


    render() {
        const {history} = this.props;
        const reversedHistory = history.slice(0).reverse();
        if(!history){
            return;
        }

        return (
            <div className="historyWrapper">
               {reversedHistory.map((item, index) => {
                   return <HistoryCard {...item} result={item.result} time={index < reversedHistory.length-1 ? item.time-reversedHistory[index+1].time : 0} /> 
               })}  
            </div>
        );
    }
}

export default History;