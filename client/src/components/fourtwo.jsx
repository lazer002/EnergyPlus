import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Fourtwo({ pimg, pname, bghover, sidetext, index }) {
  useGSAP(() => {
    gsap.from('.cardtext', {
      x: 650,
      delay: 2,
      scale: 2,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.cardholder',
        start: 'top 20%',
        end: 'bottom 30%',
        scrub: true,

      }
    });

    gsap.to('.cardtext', {
      x: -500,
      delay: 2,
      duration: 2,
      opacity: 1,
      scrollTrigger: {
        trigger: '.cardholder',
        start: 'top 60%', // Adjusted start position
        end: 'bottom 30%',
        scrub: 1,

      }
    });

    gsap.from('.cardholder', {
      scale: 1,
   
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: '.imagehover',
        start: 'top 110%',
        end: 'bottom 30%',
        scrub: 3,
      
      }
    });

    gsap.to('.cardholder', {
      scale: 1,
   
      rotation: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.imagehover',
        start: 'top 190%',
        end: '0%',
        scrub: 3,
        markers: true
      }
    });
    if (index !== 0) {
      gsap.from('.cardtext_side', {
        scale: .7,
        y: -500,
        x: 500,
        rotation: 0,
        scrollTrigger: {
          trigger: '.cardtext_side',
          start: 'top 30%',
          end: 'bottom -300vh',
          scrub: 1,
          // markers: true
        }
      });

      gsap.to('.cardtext_side', {
        scale: 3,
        rotation: 0,
        y: 500,
        x: -800,
        scrollTrigger: {
          trigger: '.cardtext_side',
          start: 'top 90%',
          end: 'bottom -300vh',
          scrub: 1,
          // markers: true
        }
      });
    }
  }, [bghover]);


  return (
    <>

      <div className={`relative overflow-hidden cardholder page ${bghover} `}  >
        <div className='imagehover flex justify-center py-12'>
          <img src={pimg} alt="" className='max-w-5xl shadow1 z-10' />
          <div className='prohover'></div>
          <button className=' bg-slate-100 rounded-2xl p-10 absolute bottom-44 cart opacity-0'>Add To Cart</button>
        </div>
        <img src={pimg} alt="" className='size-64 shadow1 absolute top-4 right-0 rotate-45 opacity-0 sub-picture2' />
        <img src={pimg} alt="" className='size-48 absolute top-0 rotate-15 opacity-0 sub1 shadow1' />
        <img src={pimg} alt="" className='size-36 absolute bottom-0 left-24 rotate-45 opacity-0 sub-picture shadow1' />
        <div className={`absolute left-2/4 top-4 text-8xl font-extrabold cardtext_side  rotate-90 `}>{sidetext}</div>
      </div>

    </>
  )
}

export default Fourtwo