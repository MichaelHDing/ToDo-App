var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countStatus: 'default'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countStatus !== prevState.countStatus) {
            switch (this.state.countStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'default':
                    this.setState({ count: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function (){
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0) {
                this.setState({
                    countStatus: 'default'
                });
            }
        }, 1000);
    },
    handleUpdate: function (countStr) {
        this.setState({
            count: countStr,
            countStatus: 'started'
        });
    },
    handleStatus: function (newStat) {
        this.setState({
            countStatus: newStat
        })
    },
    render: function () {
        var { count, countStatus } = this.state;
        var statusRender = () => {
            if (countStatus !== "default") {
                return <Controls returnStatus={countStatus} onStatus={this.handleStatus} />
            } else {
                return <CountdownForm onUpdate={this.handleUpdate} />
            }
        }
        return (
            <div>
                <h1 className = "page-title">Countdown</h1>
                <Clock totalSeconds={count} />
                {statusRender()}
            </div>
        );
    }
});

module.exports = Countdown;
