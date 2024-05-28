import React from 'react'
import suger from '../assets/Sugar.avif'
function Footer() {
  return (

    
    <>
      <div className="container pt-35 pb-12 relative">
        <div className="flex justify-between">
          <div className="utiles space-y-6 font-thin">
            <div className='font-extrabold text-xl'>UTILITIES</div>
            <div>FAQS</div>
            <div>CONTACT US</div>
            <div>PRIVACY POLICY</div>
            <div>SHIPPING</div>
            <div>TERMS OF USE</div>

          </div>
          <div className="utiles w-1/3">
            <div className='font-bold py-4'>
              DON'T MISS A DROP
            </div>
            <div>
              <input type="text" name="" id="" className='p-3 rounded-tl-2xl rounded-bl-2xl w-2/3' />
              <span type="submit" className='bg-slate-100 p-3 rounded-tr-2xl rounded-br-2xl w-32 text-center cursor-pointer'>Signup</span>

            </div>
            <div className="flex justify-between pt-5 pe-12">
              <img src={suger} alt="" width={24} />
              <img src={suger} alt="" width={24} />
              <img src={suger} alt="" width={24} />
            </div>

          </div>
        </div>
        <div className="policy text-center">
          <div className='font-bold'>© 2024 | 3D LAZER DRINKS | ALL RIGHTS RESERVED</div>
          <div className='text-sm'>7201 Heaven Dr. Ste A <br />
            Louisville, KY 40258</div>
        </div>
      </div>
    </>
  )
}

export default Footer