import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Components/router/Routing'


function App() {

  const [ loading, setLoading ] = React.useState(false);
  
  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Router>
      {!loading ? (
        <React.Fragment>
          <LoadingScreen />
        </React.Fragment>
      ) : (
    <div className='App font-Poppins'>
      <Navbar />
      <Routing />
    </div>
    )}
    </Router>
  )
}

export default App
