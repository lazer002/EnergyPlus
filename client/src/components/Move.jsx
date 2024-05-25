import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';




function Move() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".zo", {
      scrollTrigger: {
        trigger: ".zo",
        start: "20px 80%",
        end: "80% 80px",
        scrub: 2,

      },
      scale: 2,
      duration: 3,
    })

  })
  return (
    <>
<div className="zo">
      <div className=" mt-96 mb-56" data-scroll data-scroll-speed='-0.3' >
        <div className='scroll-anime text-white' >
          <div className='scroll-div'>
            <div>GIVE</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
            <div>YOU</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
            <div>ENERGY</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
          </div>
          <div className='scroll-div'>
            <div>GIVE</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
            <div>YOU</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
            <div>ENERGY</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
          </div>
          <div className='scroll-div'>
            <div>GIVE</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
            <div>YOU</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
            <div>ENERGY</div>
            <div className='size-20 bg-orange-600 rounded-full m-8'></div>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default Move