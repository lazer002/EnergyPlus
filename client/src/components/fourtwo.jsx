import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Fourtwo({ pimg, pname, bghover }) {
  useGSAP(() => {
    gsap.from('.cardtext', {
      x: 650,
      delay: 2,
      scale:2,
      duration: 2,
      opacity:0,
      scrollTrigger: {
        trigger: '.cardholder',
        start: 'top 90%',
        end: 'bottom 30%',
        // scrub: true,
        markers: true
      }
    });
    gsap.to('.cardtext', {
      x: -550,
      delay: 2,
      duration: 2,
      opacity:1,
      scrollTrigger: {
        trigger: '.cardholder',
        scrub: true,
        markers: true
      }
    });
    gsap.from('.cardholder', {
      scale: 0.7,
      rotation: 230,
      duration: 2,
      scrollTrigger: {
        trigger: '.imagehover',
        start: 'top 110%',
        end: 'bottom 30%',
        scrub: true,
        // markers: true
      }
    });
  
    gsap.to('.cardholder', {
      scale: .7,
      rotation: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.imagehover',
        start: 'top 90%',
        end: 'bottom 30%',
        scrub: true,
        // markers: true
      }
    });
  }, [bghover])

  return (
    <>

      <div className={`relative overflow-hidden cardholder  h-screen page`}  >
        <div className='imagehover flex justify-center py-12'>
          <img src={pimg} alt="" className='max-w-5xl shadow1 z-10' />
          <div className='prohover'></div>
        </div>
        <img src={pimg} alt="" className='size-64 shadow1 absolute top-4 right-0 rotate-45 opacity-0 sub-picture2' />
        <img src={pimg} alt="" className='size-48 absolute top-0 rotate-15 opacity-0 sub1 shadow1' />
        <img src={pimg} alt="" className='size-36 absolute bottom-0 left-24 rotate-45 opacity-0 sub-picture shadow1' />
      </div>
        <div className={`absolute  top-56 left-56 text-8xl font-extrabold cardtext ${bghover}`}>REDDRINK</div>
        <div className={`absolute  bottom-56 right-56 text-8xl font-extrabold cardtext ${bghover}`}>REDDRINK</div>
    </>
  )
}

export default Fourtwo