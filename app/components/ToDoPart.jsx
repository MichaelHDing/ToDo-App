var React = require('react');
var moment = require('moment');

var ToDoPart = React.createClass({
    render: function () {
        var { id, text, done, timeStart, timeStop } = this.props;
        var renderTimes = () => {
            if (timeStop === undefined) {
                return (
                    <p>Created At: {moment.unix(timeStart).format('MMMM Do, YYYY @ HH:mm:ss A')}</p>
                );
            } else {
                return (
                    <div>
                        <p>Created At: {moment.unix(timeStart).format('MMMM Do, YYYY @ HH:mm:ss A')}</p>
                        <p>Finished At: {moment.unix(timeStop).format('MMMM Do, YYYY @ HH:mm:ss A')}</p>
                    </div>
                );
            }
        };
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={done} />
                {text}
                {renderTimes()}
            </div>
        );
    }
});

module.exports = ToDoPart;