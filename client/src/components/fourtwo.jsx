import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Fourtwo({ pimg, pname }) {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {




    gsap.from('.cardholder', {
      scale: 0.5,
      rotation: 270,
      duration: 2,
      scrollTrigger: {
        trigger: '.imagehover',
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true, 
        markers:true
      }
    });

    gsap.to('.cardholder', {
      scale: 1,
      rotation: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.imagehover',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true, 
        markers:true
      }
    });
  })
 

  return (
    <>

      <div className='relative overflow-hidden cardholder bghover h-screen page'  >
        <div className='imagehover flex justify-center py-12'>
          <img src={pimg} alt="" className='max-w-5xl shadow1' />
          <div className='prohover'></div>
        </div>
        <img src={pimg} alt="" className='size-64 shadow1 absolute top-4 right-0 rotate-45 opacity-0 sub-picture2' />
        <img src={pimg} alt="" className='size-48 absolute top-0 rotate-15 opacity-0 sub1 shadow1' />
        <img src={pimg} alt="" className='size-36 absolute bottom-0 left-24 rotate-45 opacity-0 sub-picture shadow1' />
        <div className='absolute z-10 bottom-24 left-24 hover:left-56 text-8xl font-extrabold cardtext opacity-0 '>{pname}</div>
      </div>
    </>
  )
}

export default Fourtwo