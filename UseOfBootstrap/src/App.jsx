import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Expriment from './Components/Expriment.jsx';


function App() {

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}>
        
        
        </Route>
        <Route path='/expriment' element={<Expriment />}>
        </Route>
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
