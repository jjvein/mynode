var React = require('react')
var ReactDOM = require('react-dom')

var likeButton = React.createClass({
  getInitialState: function(){
    return {liked: false} 
  },
  handleClick: function() {
    this.setState({liked: !this.state.liked})
  },

  render: function(){
    var text = this.state.liked ? 'liked' : 'haven\'t liked '
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click me to toggle it.
      </p>
    ) 
  }
})

module.exports = likeButton

