var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Search = require('Search');

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.searchText.value = searchText;
    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.boolCheck.checked = true;
    TestUtils.Simulate.change(search.refs.boolCheck);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
