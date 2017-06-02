var React = require('react');
var ToDoPart = require('ToDoPart');

var ToDoList = React.createClass({
    render: function () {
        var { list } = this.props;
        var renderList = () => {
            if(list.length == 0) {
                return (
                    <p className = "container__message">Nothing To Do</p>
                );
            }
            return list.map((todo) => {
                return (
                    <ToDoPart key={todo.id} {...todo} onToggle = {this.props.onToggle}/>
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