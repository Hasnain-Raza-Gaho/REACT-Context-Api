import React from 'react'
import {CommonContext} from './CommonContext'

function UpdateButton(){
  
  
  
    return (
      <CommonContext.Consumer>

{
    ({updateColor}) => (
      <>
        <button onClick={()=>updateColor('yellow')}>Update Yellow Color</button>
        <button onClick={()=>updateColor('Blue')}>Update Blue Color</button>
      </>
    )
}
    </CommonContext.Consumer>
  )
}


export default UpdateButton


















