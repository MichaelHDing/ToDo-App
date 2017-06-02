var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDoPart = require('ToDoPart');

describe('ToDoList', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(ToDoList).toExist();
        });
    });
    describe('Functionality: rendering correct number of todo\'s', () => {
        it('should have the same number of todo components as elements in the todo array', () => {
            var todoTemp = [{
                id: 1, text: 'thing1'
            }, {
                id: 2, text: 'thing2'
            }];
            var todolist = TestUtils.renderIntoDocument(<ToDoList list={todoTemp} />);
            var todoComps = TestUtils.scryRenderedComponentsWithType(todolist, ToDoPart);
            expect(todoComps.length).toBe(todoTemp.length);

        });
    });
    describe('Functionality: rendering correct number of todo\'s', () => {
        it('should have the same number of todo components as elements in the todo array', () => {
            var todoTemp = [{
                id: 1, text: 'thing1'
            }, {
                id: 2, text: 'thing2'
            }];
            var todolist = TestUtils.renderIntoDocument(<ToDoList list={todoTemp} />);
            var todoComps = TestUtils.scryRenderedComponentsWithType(todolist, ToDoPart);
            expect(todoComps.length).toBe(todoTemp.length);

        });
    });
});