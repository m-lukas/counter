import React, { Component } from 'react';
import tally_marks_5 from '../res/tally_marks_5.svg';
import tally_marks_4 from '../res/tally_marks_4.svg';
import tally_marks_3 from '../res/tally_marks_3.svg';
import tally_marks_2 from '../res/tally_marks_2.svg';
import tally_marks_1 from '../res/tally_marks_1.svg';

import '../css/tally.css';

class Tally extends Component {

    round = x => {
        return Math.ceil(x/5)*5;
    }

    calcRemaining = count => {
        let rem = this.round(count) - count;
        console.log("remaining: " + rem);
        return rem;
    }

    calcClusterNum = count => {
        let clusterNum = this.round(count) / 5;
        console.log(clusterNum);
        return clusterNum
    }

    getRemCluster = count => {
        switch(count){
            case 1:
                console.log("tally 1");
                return tally_marks_1;
            case 2:
                console.log("tally 2");
                return tally_marks_2;
            case 3:
                console.log("tally 3");
                return tally_marks_3;
            case 4:
                console.log("tally 4");
                return tally_marks_4;
            default:
                return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        }
    }

    render() {
        const {count} = this.props;
        const remaining = this.calcRemaining(count);

        return (
            <div className="tallyList">
                {
                    [...Array(count > 5 ? (this.calcClusterNum(count)-1) : 0)].map((x,i) => {
                        console.log("map: " + count);
                        return <img src={tally_marks_5} alt="tally marks" />
                    })
                }
                {remaining > 0 || count === 0  ? <img src={this.getRemCluster(5-remaining)} alt="tally marks" /> : <img src={tally_marks_5} alt="tally marks" />}
            </div>
        );
    }
}

export default Tally;