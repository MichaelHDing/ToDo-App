var React = require('react');

var ToDoPart = React.createClass({
    render: function() {
        var {id, text} = this.props
        return (
            <div>{id}. {text}</div>
        );
    }
});

module.exports = ToDoPart;