var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoPart = require('ToDoPart');

describe('ToDoPart', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(ToDoPart).toExist();
        });
    });
    describe('Functionality: onToggle Buttons', ()=>{
        it('should change onToggle when checkmark is clicked', ()=>{
            var item = { id: 1, text: 'hi', done: false};
            var spy = expect.createSpy();
            var part = TestUtils.renderIntoDocument(<ToDoPart {...item} onToggle= {spy}/>)
            var $el = $(ReactDOM.findDOMNode(part));
            
            TestUtils.Simulate.click($el[0]);
            
            expect(spy).toHaveBeenCalledWith(1);
        });
    });
});