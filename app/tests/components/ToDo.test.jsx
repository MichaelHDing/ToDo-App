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
        var addtolist = 'task1';
        it('should update the todolist ass terms are added', () => {
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
    describe('Functionality: timing', () => {
        it('should give a timeStart value when started', () => {
            var todo = TestUtils.renderIntoDocument(<ToDo />);
            todo.setState({ listToDo: [] });
            todo.handleAdd('test');

            expect(todo.state.listToDo[0].timeStart).toBeA('number');
        });
        it('should give a timeStopp value when stopped', () => {
            var todo = TestUtils.renderIntoDocument(<ToDo />);
            todo.setState({
                listToDo: [
                    { id: 0, text: 'test', done: false, timeStart: 0, timeStop: undefined },
                ]
            });
            todo.handleToggle(0);
            expect(todo.state.listToDo[0].timeStop).toBeA('number');
        });
        it('should reset the timeStop when true to false', () => {
            var todo = TestUtils.renderIntoDocument(<ToDo />);
            todo.setState({
                listToDo: [
                    { id: 0, text: 'test', done: true, timeStart: 0, timeStop: undefined },
                ]
            });
            todo.handleToggle(0);
            expect(todo.state.listToDo[0].timeStop).toBeA('undefined');
        }); 
    });
});