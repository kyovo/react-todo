var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', function() {
  it('should exist', function() {
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id on click', function() {
    var todoData={
      id: 199,
      text: 'Write todo testjsx test',
      completed:true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  });
});
