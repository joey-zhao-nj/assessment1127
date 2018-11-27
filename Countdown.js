/**
 * React Coding: Write a countdown clock react component that has a function prop that will format the time it displays 
 * (*you can code in another language if you prefer)
 */

import React from 'react';
import PropTypes from 'prop-types';

class Countdown extends React.Component {
    numberToTwoDecimal(num) {
        num = Math.floor(num);
        if (num < 10) {
            return '0' + num;
        } else {
            return num + '';
        }
    }

    formatTime(seconds) {
        let formatted = "";
        if (seconds >= 3600) {
            formatted += this.numberToTwoDecimal(seconds / 3600) + ':';
            seconds %= 3600;
        }
        if (seconds >= 60) {
            formatted += this.numberToTwoDecimal(seconds / 60) + ':';
            seconds %= 60;
        } else {
            formatted += '00:';
        }
        formatted += this.numberToTwoDecimal(seconds);
        return formatted
    }

    render() {
        let formatted = this.formatTime(this.props.timeSeconds);
        return <span>{formatted}</span>
    }
}

Countdown.propTypes = {
    timeSeconds: PropTypes.number.isRequired,
};

export default Countdown;