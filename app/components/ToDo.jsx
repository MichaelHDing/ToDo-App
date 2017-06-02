var React = require('react');
var uuid = require('node-uuid');
var AddToDo = require('AddToDo');
var Search = require('Search');
var ToDoList = require('ToDoList');

var ToDo = React.createClass({
    getInitialState: function () {
        return {
            search: '',
            show: false,
            listToDo: []
        };
    },
    handleSearch: function (searchTerm, showCheck) {
        this.setState({
            search: searchTerm.toString().toLowerCase(),
            show: showCheck
        })
    },
    handleAdd: function (addTerm) {
        var listToDo = this.state.listToDo
        var idAdd = listToDo.length + 1;
        this.setState({
            listToDo: listToDo.concat({ id: uuid(), text: addTerm, done: false })
        });
    },
    handleToggle: function (id) {
        var updated = this.state.listToDo.map((element) => {
            if (element.id === id) {
                element.done = !element.done;
            }
            return element;
        });
        this.setState({ listToDo: updated })
    },
    render: function () {
        var { listToDo, show } = this.state;
        return (
            <div>
                <h1>ToDo App</h1>
                <Search onSearch={this.handleSearch} />
                <ToDoList list={listToDo} onToggle={this.handleToggle} showCheck = {show} />
                <AddToDo onAdd={this.handleAdd} />
            </div>
        );
    }
});

module.exports = ToDo;