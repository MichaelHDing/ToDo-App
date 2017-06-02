var React = require('react');
var ToDoPart = require('ToDoPart');

var ToDoList = React.createClass({
    render: function () {
        var { list } = this.props;
        var renderList = () => {
            return list.map((todo) => {
                return (
                    <ToDoPart key={todo.id} {...todo} />
                );
            });
        };
        return (
            <div>
                {renderList()}
            </div>
        );
    }
});

module.exports = ToDoList;