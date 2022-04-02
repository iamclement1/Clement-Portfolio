import { useState } from 'react'
import { BrowserRouter as Router,  Route, Link, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import GetInTouch from './Pages/GetInTouch'
import Projects from './Pages/Projects'


function App() {

  return (
    <Router>
    <div className='App font-Poppins'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/getintouch' element={<GetInTouch/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
