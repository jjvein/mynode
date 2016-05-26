var React = require('react')
var DivComponent = props =>  {
  return ( 
    <div className={props.className}>
      <pre>
        Class className  extends React.Component
      </pre>
    </div>
  )
}

module.exports = DivComponent
