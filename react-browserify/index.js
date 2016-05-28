import React, {Component} from "react"
import ReactDOM from "react-dom"
import SearchForm from "./component/searchform"

ReactDOM.render(
  <SearchForm />,
  document.querySelector('#placeholder')
)


//可以同时调用多个 render 方法
setInterval(function(){
  var cD = new Date()
  var dateTime = "Last Sync: " + cD.getDate() + '/' + (cD.getMonth() + 1)
    + '/' + cD.getFullYear() + '@' 
    + cD.getHours() + ':'
    + cD.getMinutes() + ':' + cD.getSeconds()
  ReactDOM.render(
    <div>{ dateTime }</div>,
    document.querySelector('#datetime')
  )
}, 1000)
