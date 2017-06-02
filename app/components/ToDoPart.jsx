var React = require('react');
var moment = require('moment');

var ToDoPart = React.createClass({
    render: function () {
        var { id, text, done, timeStart, timeStop } = this.props;
        var todoClassName = done ? 'todo todoDone' : 'todo';
        var renderTimes = () => {
            if (timeStop === undefined) {
                return 'Created At: ' +  moment.unix(timeStart).format('MMMM Do, YYYY @ HH:mm:ss A');
            } else {
                return 'Completed At: ' +  moment.unix(timeStop).format('MMMM Do, YYYY @ HH:mm:ss A');
            }
        };
        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={done} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderTimes()}</p>
                </div>
            </div>
        );
    }
});

module.exports = ToDoPart;