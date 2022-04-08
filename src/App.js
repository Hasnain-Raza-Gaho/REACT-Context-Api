import './App.css'
import React, { useState, useMemo} from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [item, setItem] = useState(10)

const multiCountMemo = useMemo( function multiCount() {
  console.log('multicount')
  return count * 5
})


  return (
    <div className="App">
      <h1>UseMemo Hook</h1>
      <h2>Count : {count}</h2>
      <h2>item : {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={()=> setCount(count+1)}>Update Count</button>
      <button onClick={()=> setItem(item*5)}>Update Item</button>

    </div>
  )
}

export default App