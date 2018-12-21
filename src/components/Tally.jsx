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
            rest: Number(x).toFixed(2) < 1e20 ? ("0." + Number(x).toFixed(2).toString().split("e")[0].split(".")[1]) : "0.00"
        }
    }

    getSingleTallies = number => {
        switch (number) {
            case 1:
                return tally_marks_1;
            case 2:
                return tally_marks_2;
            case 3:
                return tally_marks_3;
            case 4:
                return tally_marks_4;
            default:
                return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        }
    }

    render() {
        const {count} = this.props;
        const values = this.getCounts(count);

        return (
            <div className="tallyList">
                <row>
                    <h1>
                        {`${values[5]} x`}
                        <img src={tally_marks_5} alt="5" align="middle"/>
                    </h1>
                </row>
                <row>
                    <h1>
                        +
                        {values[1] > 0 ? <img src={this.getSingleTallies(values[1])} alt="1" align="middle"/> : ' 0'}
                    </h1>
                </row>
                <row>
                    <h1>+ {values.rest}</h1>
                </row>
            </div>
        );
    }
}

export default Tally;