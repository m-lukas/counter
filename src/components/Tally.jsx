import React, { Component } from 'react';
import tally_marks_5 from '../res/tally_marks_5.svg';
import tally_marks_4 from '../res/tally_marks_4.svg';
import tally_marks_3 from '../res/tally_marks_3.svg';
import tally_marks_2 from '../res/tally_marks_2.svg';
import tally_marks_1 from '../res/tally_marks_1.svg';

import '../css/tally.css';

class Tally extends Component {

    roundTo5 = x => {
        return Math.floor(x/5)*5;
    }

    roundTo1 = x => {
        return Math.floor(x);
    }

    ////////////////////////

    getCounts = x => {
        let next5 = this.roundTo5(x);
        let next1 = this.roundTo1(x);
        return {
            "5": next5/5,
            "1": next1-next5 >= 1 ? next1-next5 : 0,
            rest: Number(x).toFixed(4) < 1e20 ? ("0." + Number(x).toFixed(4).toString().split("e")[0].split(".")[1]) : "0"
        }
    }

    render() {
        const {count} = this.props;
        const values = this.getCounts(count);

        return (
            <div className="tallyList">
                <h2>{values[5]} x</h2>
                <img src={tally_marks_5} alt="5"/>
                <h2>{values[1]} x</h2>
                <img src={tally_marks_1} alt="5"/>
                <h1>+</h1>
                <h2>{values.rest}</h2>   
            </div>
        );
    }
}

export default Tally;