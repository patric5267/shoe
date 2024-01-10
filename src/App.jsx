import React from 'react';
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Shoe from './components/Shoe';
import Home from './components/Home';
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shoe' element={<Shoe/>}/>
      </Routes>
    </Router>
  )
}

export default App
