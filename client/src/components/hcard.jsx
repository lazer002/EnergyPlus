import React from 'react'
import suger from '../assets/Sugar.avif'
function hcard() {
  return (
    <>
<div className="p-12">
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
    
    
    
    </>
  )
}

export default hcard