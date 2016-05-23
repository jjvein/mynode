var React = require('react')
var ReactDOM = require('react-dom')
//var MyButtonController = require('./components/MyButtonController');
var LikeButton = require('./like')
//var ReactPassword = require('react-password')
var ReactDiv = require('./div')
var ReactInput = require('./input')

var ReactList = require('./list')

ReactDOM.render(
  <div>
    Hello World
    <LikeButton />
    <ReactDiv className='yes'/>
    <ReactInput />
  </div>,
  document.querySelector('#example')
);
ReactDOM.render(
  <div>
    <hr />
    <ReactList items={['Apple', 'Banana', 'Pear', 'Watermelon']}/>
  </div>,
  document.querySelector('#list')
)
