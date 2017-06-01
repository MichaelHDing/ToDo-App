var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            time: 0,
            timeStatus: 'default'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timeStatus !== prevState.timeStatus) {
            switch (this.state.timeStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'default':
                    this.setState({ time: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
               time: this.state.time + 1
            })
        }, 1000);
    },
    handleStatus: function (newStat) {
        this.setState({
            timeStatus: newStat
        })
    },
    render: function () {
        var { time, timeStatus } = this.state;
        return (
            <div>
                <h1 className = "page-title">Timer</h1>
                <Clock totalSeconds={time} />
                <Controls returnStatus={timeStatus} onStatus={this.handleStatus} />
            </div>
        );
    }
});

module.exports = Timer;