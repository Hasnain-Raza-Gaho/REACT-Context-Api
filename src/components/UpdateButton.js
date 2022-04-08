import React from 'react'
import {CommonContext} from './CommonContext'

function UpdateButton(){
  
  
  
    return (
      <CommonContext.Consumer>

{
    ({updateColor}) => (
        <button onClick={()=>updateColor()}>Update Color</button>
    )
}
    </CommonContext.Consumer>
  )
}


export default UpdateButton


















