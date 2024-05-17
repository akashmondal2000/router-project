import { useState } from 'react'
import './App.css'
import { Header,Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Header/>
    <h1 className='helo'>Hellow Bhai</h1>
    <Footer/>
  
    </>
  )
}

export default App
