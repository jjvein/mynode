import React, {Component} from "react"
import ReactButton from "react-button"

export default class SearchForm extends Component {
  constructor(){
    super() 
  }

  getInitialState() {
  
  }

  handleClick(e) {
    return true 
  }

  render(){
    <form>
    <input type="text" placeholder="input Keyword for filter ..."/>
    <ReactButton onClick={this.handleClick}/>
    </form>
  }


}
