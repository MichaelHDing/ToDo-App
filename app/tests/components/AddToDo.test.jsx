var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(AddToDo).toExist();
        });
    });
    describe('Functionality: onAdd()', () => {
        it('should call onAdd() with valid data', () => {
            var spy = expect.createSpy();
            var checker = 'thing1'
            var addtd = TestUtils.renderIntoDocument(<AddToDo onAdd={spy} />);
            var $el = $(ReactDOM.findDOMNode(addtd));

            addtd.refs.submission.value = checker;
            TestUtils.Simulate.submit($el.find('form')[0]);

            expect(spy).toHaveBeenCalledWith(checker);
        });
        it('should not call onAdd() with \'\' entry', () => {
            var spy = expect.createSpy();
            var checker = '';
            var addtd = TestUtils.renderIntoDocument(<AddToDo onAdd={spy} />);
            var $el = $(ReactDOM.findDOMNode(addtd));

            addtd.refs.submission.value = checker;
            TestUtils.Simulate.submit($el.find('form')[0]);

            expect(spy).toNotHaveBeenCalled();
        });
    });
});