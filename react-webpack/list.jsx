var React = require('react')
var ReactList = props => {

  var current
  function handleClick(i) {
    current = props.items[i]
    console.log('You clicked ' + current) 
  }
  return (
    <div>
    {props.items.map((item, i) => {
      return (
        <div onClick={handleClick.bind(null, i)} key={i}>{item}</div> 
      ) 
    })}
    Yes you are
    </div>
  )
}

module.exports = ReactList
