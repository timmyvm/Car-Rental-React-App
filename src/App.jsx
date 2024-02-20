import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from "./pages/Home"
import Footer from "./Components/Footer"
import Models from './pages/Models'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
       <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/models' element={<Models/>}></Route>
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App
