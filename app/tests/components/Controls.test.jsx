var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(Controls).toExist();
        });
    });
    describe('Renderability', () =>{
        it('should render pause to the screen when started', ()=>{
            var contr = TestUtils.renderIntoDocument(<Controls returnStatus = 'started'/>);
            var $el = $(ReactDOM.findDOMNode(contr));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
        it('should render start to the screen when paused', ()=>{
            var contr = TestUtils.renderIntoDocument(<Controls returnStatus = 'paused'/>);
            var $el = $(ReactDOM.findDOMNode(contr));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});