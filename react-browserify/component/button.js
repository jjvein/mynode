import React, {Component} from "react"

var ReactButton = React.createClass({


  handleClick: function(e) {
    e.preventDefault()
    var value = e.target.value
    this.props.handleClick() 
  },
  render: function() {
    var s = {
      width: '80px',
      height: '40px',
    }
    return (
    <button style={s} onClick={this.handleClick}>submit</button>  
    )
  }
})

module.exports = ReactButton
