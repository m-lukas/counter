import React, { Component } from 'react';

class History extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }


    render() {
        const {history} = this.props;
        if(!history){
            return;
        }

        return (
            <div>
               {history.map((item, index) => {
                   return <li>{`${item.mode.icon}|${item.origin}|${item.value}`}</li>
               })}  
            </div>
        );
    }
}

export default History;