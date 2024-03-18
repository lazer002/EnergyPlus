import React from 'react'
import { NavLink } from 'react-router-dom'


function navbar() {


function menubar(e){
let list = document.querySelector('ul')

list.classList.toggle('top-[80px]'),list.classList.toggle('opacity-100')
// ,list.classList.toggle('z-100')

}




  return (
    <>
    <div className="flex justify-center">
      <nav className='container p-2 px-4 my-3 bg-pink-200  md:flex md:items-center md:justify-between absolute top-0 z-10 w-9/12 rounded-3xl'>
        <div className='my-3 flex justify-between items-center z-40' >
          <span className='text-2xl '>Logo</span>
          <span className='md:hidden block text-2xl cursor-pointer' onClick={menubar}>
          <svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5 " />
</svg>

          </span>
        </div>

        <ul className='md:flex md:item-center z-[1] md:z-auto md:static absolute bg-2 left-0 w-full md:w-auto pl-5 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-700 '>
        
            <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/">home</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'> <NavLink to="/Product">Product</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'> <NavLink to="/About">About</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'> <NavLink to="/Contect">Contect</NavLink></li>
            <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/Signup">Signup</NavLink></li>
          
        </ul>


      </nav>
      </div>
    </>
    
  )
}

export default navbar













