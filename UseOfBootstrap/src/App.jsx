import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Components/Home.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Experiment from './Components/Experiment.jsx';


function App() {

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}>
        
        
        </Route>
        <Route path='/experiment' element={<Experiment />}>
        </Route>
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
