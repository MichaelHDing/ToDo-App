var React = require('react');

var CountdownControls = React.createClass({
    propTypes: {
        returnStatus: React.PropTypes.string.isRequired,
        onStatus: React.PropTypes.func.isRequired
    },
    onStatus: function(newStatus){
        return () =>{
            this.props.onStatus(newStatus);
        }
    },
    render: function () {
        var { returnStatus } = this.props;
        var renderStartStop = (() => {
            if (returnStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatus('paused')}>Pause</button>
            } else if (returnStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatus('started')}>Start</button>
            }
        });
        return (
            <div className = "controls">
                {renderStartStop()}
                <button className="button alert hollow" onClick={this.onStatus('default')}>Clear</button>
            </div>
        );
    }
});

module.exports = CountdownControls;