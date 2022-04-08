import React from 'react'
import {CommonContext} from './CommonContext'

class Main extends React.Component{
  
  render() {
  
    return (
      <CommonContext.Consumer>

{
    ({color}) => (
        <h1 style={{ color:color }}>Hello This is Main Page</h1>
    )
}
    </CommonContext.Consumer>
  )
}
}

export default Main