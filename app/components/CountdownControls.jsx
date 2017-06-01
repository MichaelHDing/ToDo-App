var React = require('react');

var CountdownControls = React.createClass({
    propTypes: {
        returnStatus: React.PropTypes.string.isRequired,
        onPauseReset: React.PropTypes.func.isRequired
    },
    onPauseReset: function(newStatus){
        return () =>{
            this.props.onPauseReset(newStatus);
        }
    },
    render: function () {
        var { returnStatus } = this.props;
        var renderStartStop = (() => {
            if (returnStatus === 'started') {
                return <button className="button secondary" onClick={this.onPauseReset('paused')}>Pause</button>
            } else if (returnStatus === 'paused') {
                return <button className="button primary" onClick={this.onPauseReset('started')}>Start</button>
            }
        });
        return (
            <div className = "controls">
                {renderStartStop()}
                <button className="button alert hollow" onClick={this.onPauseReset('reset')}>Clear</button>
            </div>
        );
    }
});

module.exports = CountdownControls;