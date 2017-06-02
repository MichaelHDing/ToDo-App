var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var AddToDo = require('AddToDo');
var Search = require('Search');
var ToDoList = require('ToDoList');
var ToDoAPI = require('ToDoAPI');

var ToDo = React.createClass({
    getInitialState: function () {
        return {
            search: '',
            show: false,
            listToDo: ToDoAPI.getToDos()
        };
    },
    componentDidUpdate: function () {
        ToDoAPI.setToDos(this.state.listToDo);
    },
    handleSearch: function (showCheck, searchTerm) {
        this.setState({
            search: searchTerm.toLowerCase(),
            show: showCheck
        })
    },
    handleAdd: function (addTerm) {
        var listToDo = this.state.listToDo
        this.setState({
            listToDo: listToDo.concat(
                {
                    id: uuid(),
                    text: addTerm,
                    done: false,
                    timeStart: moment().unix(),
                    timeStop: undefined
                })
        });
    },
    handleToggle: function (id) {
        var updated = this.state.listToDo.map((element) => {
            if (element.id === id) {
                element.done = !element.done;
                if(element.done) {
                    element.timeStop = moment().unix();
                } else {
                    element.timeStop = undefined;
                }
            }
            return element;
        });
        this.setState({ listToDo: updated })
    },
    render: function () {
        var { listToDo, show, search } = this.state;
        var filteredToDos = ToDoAPI.filterToDos(listToDo, show, search);
        return (
            <div>
                <h1>ToDo App</h1>
                <Search onSearch={this.handleSearch} />
                <ToDoList list={filteredToDos} onToggle={this.handleToggle} />
                <AddToDo onAdd={this.handleAdd} />
            </div>
        );
    }
});

module.exports = ToDo;