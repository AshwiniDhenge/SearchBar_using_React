import { useState } from 'react'
import Searchbar from './assets/Component/Searchbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searchbar/>
    </>
  )
}

export default App
