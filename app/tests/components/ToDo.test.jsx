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
});