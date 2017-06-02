var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('ToDo', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(ToDo).toExist();
        });
    });
    describe('Functionality: adding todos', () => {
        it('should update the todolist ass terms are added', () => {
            var addtolist = 'task1';
            var todo = TestUtils.renderIntoDocument(<ToDo />);
            todo.setState({
                listToDo: []
            });
            todo.handleAdd(addtolist);

            expect(todo.state.listToDo[0].text).toBe(addtolist);
        });
    });
    describe('Functionality: toggling', () => {
        it('should toggle completed value when handleToggle is called: initial false', () => {
            var todo = TestUtils.renderIntoDocument(<ToDo />);
            todo.setState({
                listToDo: [
                    { id: 1, text: 'hi', done: false },
                    { id: 2, text: 'bye', done: false }
                ]
            });
            expect(todo.state.listToDo[0].done).toBe(false);
            expect(todo.state.listToDo[1].done).toBe(false);
            todo.handleToggle(1);
            expect(todo.state.listToDo[0].done).toBe(true);
            expect(todo.state.listToDo[1].done).toBe(false);
        });
        it('should toggle completed value when handleToggle is called: initial true', () => {
            var todo = TestUtils.renderIntoDocument(<ToDo />);
            todo.setState({
                listToDo: [
                    { id: 1, text: 'hi', done: true },
                    { id: 2, text: 'bye', done: false }
                ]
            });
            expect(todo.state.listToDo[0].done).toBe(true);
            expect(todo.state.listToDo[1].done).toBe(false);
            todo.handleToggle(1);
            expect(todo.state.listToDo[0].done).toBe(false);
            expect(todo.state.listToDo[1].done).toBe(false);
        });
    });
});