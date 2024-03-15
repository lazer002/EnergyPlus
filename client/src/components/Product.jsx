import React from 'react'
import suger from '../assets/Sugar.avif'
import Footer from './footer'

function Product() {
  return (
 <>
 <div className="grid grid-cols-4 mt-24 text-center">
 <div className="border text-xl">HOME - SNEAKER</div>
 <div className="border col-span-3 py-6">
  <div className="text-left text-6xl px-10">Search...</div>
 </div>
  <div className="border">
    <div className="text-3xl mt-12">FILTER</div>
<div className="filter p-8">
  <div className=" p-2 border text-2xl">FIlrter 1</div>
  <div className=" p-2 border text-2xl">FIlrter 1</div>
  <div className=" p-2 border text-2xl">FIlrter 1</div>
  <div className=" p-2 border text-2xl">FIlrter 1</div>
</div>

  </div>
  <div className="border p-8 ">

<div className="rounded-2xl glass p-6">

    <div className="text-start">
<div className="text-4xl font-bolder">ADIDAS</div>
<div className="text-md font-normal">ADIDAS FREE ME LEO faw 2</div>
</div>
<img src={suger} alt="" width={700} className='hover:scale-125 ease-in-out transition-all hover:rotate-12' />
<div className="flex justify-between">
  <div className="text-start">
    <div className='font-normal text-sm text-green-600'>ORIGNAL</div>
    <div className='font-bolder text-xl'>ORIGNAL fwafwagw</div>
  </div>
  <div>
    <div className='text-4xl font-bolder'>$130</div>
  </div>
</div>
  </div>
  </div>
  <div className="border">a</div>
  <div className="border">a</div>
 </div>
 
 
 
 
 
 
 
 
 <Footer/>
 </>





  )
}

export default Product