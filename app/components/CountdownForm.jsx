var React = require('react');

var CountdownForm = React.createClass({
    onUpdate: function (e) {
        e.preventDefault();
        var countStr = this.refs.submission.value;

        if (countStr.match(/^[0-9]*$/)) {
            this.refs.submission.value = '';
            this.props.onUpdate(parseInt(countStr, 10));
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onUpdate} className="countdown-form">
                    <input type="text" ref="submission" placeholder="Enter Time in Seconds" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;