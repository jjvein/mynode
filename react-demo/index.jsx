var React = require('react');
var ReactDOM = require('react-dom');
//var MyButtonController = require('./components/MyButtonController');
var LikeButton = require('./like')

ReactDOM.render(
  <div>
    Hello World
    <LikeButton />
  </div>,
  document.querySelector('#example')
);
