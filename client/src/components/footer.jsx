import React from 'react'
import suger from '../assets/Sugar.avif'
function footer() {
  return (
    <>
    <div className="container pt-35 pb-12">
        <div className="flex justify-between">
            <div className="utiles">
<h1>UTILITIES</h1>
<div>FAQS</div>
<div>CONTACT US</div>
<div>PRIVACY POLICY</div>
<div>SHIPPING</div>
<div>TERMS OF USE</div>

            </div>
            <div className="utiles">
                <h1>
                DON'T MISS A DROP
                </h1>
<div>
<input type="text" name="" id="" />
<button type="submit">Signup</button>

</div>
 <div className="flex justify-between">
<img src={suger} alt="" width={24}/>
<img src={suger} alt="" width={24}/>
<img src={suger} alt="" width={24}/>
 </div>
 
            </div>
        </div>
        <div className="policy text-center">
            <div className='font-bold'>© 2024 | 3D ENERGY DRINKS | ALL RIGHTS RESERVED</div>
            <div className='text-sm'>7201 Intermodal Dr. Ste A <br />
Louisville, KY 40258</div>
        </div>
    </div>
    
    
    </>
  )
}

export default footer