import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Components/Home.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Experiment from './Components/Experiment.jsx';
import ImageShapeSection from './Components/ImageSection.jsx';
import TextFeatures from './Components/TextFeatures.jsx';


function App() {

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}>
        
        
        </Route>
        <Route path='/experiment' element={<Experiment />}>
        </Route>
        <Route path='/image' element = {<ImageShapeSection />}>

        </Route>
        <Route path='/textFeatures' element= {<TextFeatures />}>
        </Route>
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
