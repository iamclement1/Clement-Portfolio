import { useState } from 'react'
import { BrowserRouter as Router,  Route, Link, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'


function App() {

  return (
    <Router>
    <div className='App font-Poppins'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
