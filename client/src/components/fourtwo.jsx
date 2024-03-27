import React, { useState } from 'react'


function fourtwo({pimg,pname,bghover}) {
const [isHovered,setisHovered]=useState(false)
const hvron = ()=>{
  setisHovered(true)
}
const hvrleave = ()=>{
  setisHovered(false)
}
const hg = `relative overflow-hidden cardholder ${isHovered ? bghover : ' '} h-screen page`
  return (
    <> 

          <div className={hg} onMouseEnter={hvron} onMouseLeave={hvrleave} data-scroll >
             <div className={`imagehover flex justify-center py-12`}>
              <img src={pimg} alt="" className=' max-w-5xl shadow1'  />
              <div className='prohover '></div>
            </div>
            <img src={pimg} alt="" className='size-64 shadow1 absolute top-4 right-0 rotate-45 opacity-0 sub-picture2' />
            <img src={pimg} alt="" className='size-48 absolute top-0 rotate-15 opacity-0 sub1 shadow1' />
            <img src={pimg} alt="" className='size-36 absolute bottom-0 left-24 rotate-45 opacity-0 sub-picture shadow1' />
            <div className='absolute z-10 bottom-24 left-24 hover:left-56 text-8xl font-extrabold cardtext opacity-0 '>{pname}</div>
          </div>
    </>
  )
}

export default fourtwo