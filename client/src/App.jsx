import React, { useRef,useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'
import Contect from './components/Contect.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import '../index.js'
import './mycss.css'
import MouseTracker from './components/MouseTracker.jsx';

function App() {
const locomotiveScroll = new LocomotiveScroll()

  return (

<BrowserRouter>
{/* <MouseTracker/> */}
<div class="animation-container">
      <div class="shape1"></div>
      <div class="shape2"></div>
      <div class="shape3"></div>
      <div class="shape4"></div>
      <div class="shape5"></div>
      <div class="shape6"></div>
    </div>
<Navbar/>
<Routes>

<Route  path='/' element={<Home/>}  />
<Route  path='/Product' element={<Product/>}  />
<Route  path='/Contect' element={<Contect/>}  />
<Route  path='/About' element={<About/>}  />
<Route  path='/Signup' element={<Signup/>}  />


</Routes>
</BrowserRouter>
  )
}

export default App