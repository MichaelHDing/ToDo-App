var React = require('react');

var ToDo = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

module.exports = ToDo;