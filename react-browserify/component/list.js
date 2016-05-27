import React, {Component} from "react"

export default class ReactList extends Component {


  render() {
    return (
    <ul>
      {this.props.items.map((item, i) => {
        return <li key={i}>{ item }</li>  
      })}
    </ul>
    )
  }
}
