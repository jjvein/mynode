
var React = require('react')
var ReactDOM = require('react-dom')
var ReactInput = React.createClass({

  getInitialState() {
    return {value: ''}  
  },

  handleChange: function(e) {
    var value = e.target.value
    this.setState({value: value})
  },

  clearState: function() {
    this.setState({value: ''}, function() {
      ReactDOM.findDOMNode(this.refs.UserInput).focus()
      //this.refs.UserInput.getDOMNode().focus()
    }) 
  },

  render() {
    return (
      <div>
        <div onClick={this.clearState}>Click to clear and focus</div>
        <input value={this.state.value} onChange={this.handleChange} ref="UserInput"/>
      </div>
    ) 
  }

})

module.exports = ReactInput
