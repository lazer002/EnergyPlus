import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-center">
      <nav className='p-2 px-4 bg-white rounded-full md:flex md:items-center md:justify-between absolute z-10 w-3/4'>
        <div className='my-3 flex justify-between items-center z-40'>
          { !isOpen && (
            <span className='text-2xl' onClick={toggleMenu}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer opacity-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5 " />
              </svg>
            </span>
          )}
        </div>

        <div className='text-2xl py-3'>Logo</div>
        <div className='text-2xl py-3'>
          <span className='mx-4'>cart</span>
          <span>user</span>


        </div>
        
        
        <ul className={`bg-2 pl-5 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all ease-in duration-700 bg-slate-200 navtbs`} style={{ transform: 'translateX(-50%)' }}>
          <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/">Home</NavLink></li>
          <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/Product">Product</NavLink></li>
          <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/About">About</NavLink></li>
          <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/Contact">Contact</NavLink></li>
          <li className='m-4 hover:text-cyan-500 text-xl'><NavLink to="/Signup">Signup</NavLink></li>
          <span className='text-2xl absolute right-28 top-11' onClick={toggleMenu}> X </span>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
