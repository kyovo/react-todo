const React = require('react'),
      ReactDOM = require('react-dom'),
      {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!aplicationStyles');

ReactDOM.render(
  <p>Boilerplate Final Project</p>,
  document.getElementById('app')
);
