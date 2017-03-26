const React = require('react'),
      ReactDOM = require('react-dom'),
      {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!aplicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
