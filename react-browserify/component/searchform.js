import React, {Component} from "react"
import ReactButton from "./button"
import ReactList from "./list"

var SearchForm = React.createClass({

  getInitialState: function() {
    return {userInput: '', inputArr: []}  
  },

  handleClick: function() {
    var userInput = this.state.userInput,
      inputArr = this.state.inputArr
    
    inputArr.push(userInput)
    this.setState({inputArr: inputArr})

  },

  onInputChange: function(e){
    var value = e.target.value 
    this.setState({userInput: value})

  },

  render: function(){

    var s = {
      width: '300px',
      height: '40px',
      border: "1px solid #eee"
    }
    return (
    <div>
      <form>
        <input type="text" value={this.state.userInput} onChange={this.onInputChange} style={s} placeholder="Try typing something as you like..."/>
        <ReactButton handleClick={this.handleClick} name="Button"/>  
      </form>
      <ReactList items={this.state.inputArr}/>
    </div>
    )
  }

})

module.exports = SearchForm
