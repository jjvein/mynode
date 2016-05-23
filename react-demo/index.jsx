var React = require('react')
var ReactDOM = require('react-dom')
//var MyButtonController = require('./components/MyButtonController');
var LikeButton = require('./like')
//var ReactPassword = require('react-password')
var ReactDiv = require('./div')
var ReactInput = require('./input')

ReactDOM.render(
  <div>
    Hello World
    <LikeButton />
    <ReactDiv className='yes'/>
    <ReactInput />
  </div>,
  document.querySelector('#example')
);
