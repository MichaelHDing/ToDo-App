var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countStatus !== prevState.countStatus) {
            switch (this.state.countStatus) {
                case 'started':
                    debugger;
                    this.startTimer();
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },
    handleUpdate: function (countStr) {
        this.setState({
            count: countStr,
            countStatus: 'started'
        });
    },
    render: function () {
        var { count } = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onUpdate={this.handleUpdate} />
            </div>
        );
    }
});

module.exports = Countdown;
