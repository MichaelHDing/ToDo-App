var React = require('react');

var ToDoPart = React.createClass({
    render: function () {
        var { id, text, done} = this.props;

        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={done} />
                {text}
            </div>
        );
    }
});

module.exports = ToDoPart;