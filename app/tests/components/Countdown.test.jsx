var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(Countdown).toExist();
        });
    });
    describe('Functionality: handleUpdate()', ()=>{
        it('should set state to started and countdown', ()=>{
            var count = TestUtils.renderIntoDocument(<Countdown/>);
            count.handleUpdate(10);
            
            expect(count.state.count).toBe(10);
            expect(count.state.countStatus).toBe('started');
        });
        it('should be able to count down', (done)=>{
            var count = TestUtils.renderIntoDocument(<Countdown/>);
            count.handleUpdate(10);
            setTimeout(()=>{
                expect(count.state.count).toBe(9);
                done();
            }, 1001)
        });
        it('should never drop to negative numbers', (done)=>{
            var count = TestUtils.renderIntoDocument(<Countdown/>);
            count.handleUpdate(1);
            setTimeout(()=>{
                expect(count.state.count).toBe(0);
                done();
            }, 3000)
        });
    });
});