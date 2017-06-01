var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(Timer).toExist();
        });
    });
    describe('Functionality: Buttons should trigger timing', () => {
        it('should start at default', () => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            expect(timer.state.timeStatus).toBe('default');
            expect(timer.state.time).toBe(0);
        });
        it('should stop the timer when paused', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatus('paused');
            setTimeout(() => {
                expect(timer.state.time).toBe(0);
                expect(timer.state.timerStatus).toBe('paused');
            }, 1000);
            done()
        });
        it('should run the timer when started', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatus('started');
            setTimeout(() => {
                expect(timer.state.time).toBe(1);
                expect(timer.state.timeStatus).toBe('started');
            }, 1010);
            done()
        });
        it('should destroy the timer when stopped', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.setState({time: 10});
            timer.handleStatus('stopped');
            setTimeout(() => {
                expect(timer.state.time).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
            }, 1010);
            done()
        });
    });
});