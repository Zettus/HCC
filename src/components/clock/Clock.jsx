import React from 'react';
import {getTime, getDay} from '../../helper/dateTime';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time: getTime(), day: getDay()};

        setInterval(() => {
            this.setState(
                {time: getTime(), day: getDay()}
            );
        }, 1000);
    }

    render() {
        return (
            <div>
                <span>{this.state.day}</span>&emsp;<span>{this.state.time}</span>
            </div>
        );
    }
}