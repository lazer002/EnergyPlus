import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'

function Navbar() {


  function menubar(e) {
    let list = document.querySelector('ul')

    list.classList.toggle('top-[80px]'), list.classList.toggle('opacity-100')
    // ,list.classList.toggle('z-100')

  }




  return (
    <>
      <div className="flex justify-center">
        <nav className=' p-2 px-4  bg-white  md:flex md:items-center md:justify-between absolute top-0 z-10 w-screen'>
          <div className='my-3 flex justify-between items-center z-40' >
            <span className='text-2xl '>Logo</span>
            <span className='md:hidden block text-2xl cursor-pointer' onClick={menubar}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5 " />
              </svg>

            </span>
          </div>

          <ul className='md:flex md:item-center z-[1] md:z-auto md:static absolute bg-2 left-0 w-full md:w-auto pl-5 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-700 md:bg-transparent bg-slate-200 md:h-auto'>

            <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/">home</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'> <NavLink to="/Product">Product</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'> <NavLink to="/About">About</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'> <NavLink to="/Contect">Contect</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/Signup">Signup</NavLink></li>

          </ul>


        </nav>
      </div>
      {/* 
<div className="flex justify-between">
<div className="lgog px-16 py-3">LOGO</div>
<div className="nav-tab flex space-x-10 ">
<h1 className='p-3 border rounded-3xl relative overflow-hidden'><a href="" className='decoration-0 z-10 relative hover:text-black'>Product</a></h1>
<h1 className='p-3 border rounded-3xl relative overflow-hidden'><a href="" className='decoration-0 z-10 relative hover:text-black'>Studio</a></h1>
<h1 className='p-3 border rounded-3xl relative overflow-hidden'><a href="" className='decoration-0 z-10 relative hover:text-black'>Contect</a></h1>




</div>


</div> */}


    </>

  )
}

export default Navbar













