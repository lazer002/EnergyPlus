import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'
import Contect from './components/Contect.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';

import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
<Route  path='/' element={<Home/>}  />
<Route  path='/Product' element={<Product/>}  />
<Route  path='/Contect' element={<Contect/>}  />
<Route  path='/About' element={<About/>}  />
<Route  path='/Signup' element={<Signup/>}  />


</Routes>
</BrowserRouter></>

  )
}

export default App