import React, { Component } from 'react'

class HistoryCard extends Component {

    getTimeStr = (timeDif) => {
        let timeStr = "0:000s";
        let sec = Math.floor(timeDif/1000);

        if(sec === 0 && timeDif !== 0){
            timeStr = `+ 0:${timeDif}s`;
        }else if(sec >= 1 && sec < 120){
            timeStr = `+ ${sec}:${Number(timeDif/1000).toFixed(3).toString().split(".")[1]}s`;
        }else if(sec >= 120){
            timeStr = `+ ${Math.floor(sec/60)}:${Number(sec/60).toFixed(3).toString().split(".")[1]}min`;
        }

        return timeStr;
    }

    render() {
        const{mode, value, result, time} = this.props;

        return (
            <div className="card">
                <div className="leftside">
                    <h1>{mode.icon} </h1>
                    <h1>{value}</h1>
                </div>
                <div className="rightside">
                    <h2>{result}</h2>
                    <p>{this.getTimeStr(time)}</p>
                </div>
            </div>
        )
    }
}

export default HistoryCard