var React = require('react');
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
            search: searchTerm.toLowerCase(),
            show: showCheck
        })
    },
    handleAdd: function (addTerm) {
        var listToDo = this.state.listToDo
        var idAdd = listToDo.length + 1;
        this.setState({
            listToDo: listToDo.concat({id:listToDo.length + 1, text:addTerm})
        });
    },
    render: function () {
        var { listToDo } = this.state;
        return (
            <div>
                <h1>ToDo App</h1>
                <Search onSearch={this.handleSearch} />
                <ToDoList list={listToDo} />
                <AddToDo onAdd={this.handleAdd}/>
            </div>
        );
    }
});

module.exports = ToDo;