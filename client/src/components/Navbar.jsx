import React from 'react'
import { NavLink } from 'react-router-dom'


function navbar() {
  return (
    <div>
<nav>
<NavLink to="/"><div>home</div></NavLink>
<NavLink to="/Product"><div>Product</div></NavLink>
<NavLink to="/About"><div>About</div></NavLink>
<NavLink to="/Contect"><div>Contect</div></NavLink>
<NavLink to="/Signup"><div>Signup</div></NavLink>


    
</nav>



    </div>
  )
}

export default navbar













