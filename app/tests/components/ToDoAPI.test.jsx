// var React = require('react');
// var ReactDOM = require('react-dom');
var expect = require('expect');
// var $ = require('jQuery');
// var TestUtils = require('react-addons-test-utils');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(ToDoAPI).toExist();
        });
    });
    describe('Functionality: Storage and Retrieval', () => {
        beforeEach(() => {
            localStorage.removeItem('listToDo');
        });
        describe('setToDos(): ', () => {
            it('setToDos(): should store items to an empty set of todolist', () => {
                var addtodo = [{ id: 1, text: 'test', done: false }];
                ToDoAPI.setToDos(addtodo);
                var actual = JSON.parse(localStorage.getItem('listToDo'));

                expect(actual).toEqual(addtodo);
            });
            it('setToDos(): should not store invalid items', () => {
                ToDoAPI.setToDos('This should never be seen');

                expect(localStorage.getItem('listToDo')).toBe(null);
            });
        });
        describe('getToDos(): ', () => {
            it('getToDos(): should retrieve items from a populated set of todolist', () => {
                var addtodo = [{ id: 1, text: 'test', done: false }];
                localStorage.setItem('listToDo', JSON.stringify(addtodo));
                var answer = ToDoAPI.getToDos('listToDo');

                expect(answer).toEqual(addtodo);
            });
            it('getToDos(): should retrieve an empty set from an empty set of todolist', () => {
                var answer = ToDoAPI.getToDos();

                expect(answer).toEqual([]);
            });
        });
    });
    describe('functionality: filtering todo\'s', () => {
        var addtodo = [{ id: 1, text: 'test', done: true }, { id: 2, text: 'test2', done: false }];
        it('should filter the ones that have been completed when show is false', () => {
            //localStorage.setItem('listToDo', JSON.stringify(addtodo));
            var answer = ToDoAPI.filterToDos(addtodo, false, '');

            expect(answer.length).toBe(1);
        });
        it('should not filter the ones that have been completed when show is true', () => {
            //localStorage.setItem('listToDo', JSON.stringify(addtodo));
            var answer = ToDoAPI.filterToDos(addtodo, true, '');

            expect(answer.length).toBe(2);
        });
        it('should filter the non-done items to come first, then the done items, when done is true',()=>{
            var answer = ToDoAPI.filterToDos(addtodo, true, '');

            expect(answer).toEqual([{ id: 2, text: 'test2', done: false }, { id: 1, text: 'test', done: true }]);
        });
        it('should filter by the search term given [3 test cases]',()=> {
            var answer = ToDoAPI.filterToDos(addtodo, true, 'test');
            var answer2 = ToDoAPI.filterToDos(addtodo, true, 'test2');
            var answer3 = ToDoAPI.filterToDos(addtodo, true, 'you should never see thi');

            expect(answer.length).toBe(2);
            expect(answer2.length).toBe(1);
            expect(answer3.length).toBe(0);
        });
    });
});