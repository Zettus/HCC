import React from 'react';
import { sprintf } from 'sprintf-js';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time: this.getTime(), day: this.getDay()};

        setInterval(() => {
            this.setState(
                {time: this.getTime(), day: this.getDay()}
            );
        }, 1000);
    }

    getTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return sprintf('%02u:%02u:%02u', h, m, s);
    }

    getDay() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var dd = d.getDate();
        var mm = d.getMonth() + 1;
        var yyyy = d.getFullYear();

        return sprintf('%s, %02u.%02u.%04u', weekday[d.getDay()], dd, mm, yyyy);

    }

    render() {

        return (
            <div>
                <span>{this.state.day}</span>&emsp;<span>{this.state.time}</span>
            </div>
        );

    }

}