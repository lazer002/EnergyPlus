import React from 'react'
import p1 from '../assets/image-removebg-preview (1).png'
import '../js/animation.js'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import vod from '../assets/video/v3_1.mp4'

function Details() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".detail", {
      scrollTrigger: {
        trigger: ".data",
        start: "20px 80%",
        end: "80% 80px",
        scrub: 2,

      },
      scale: 1.3,
      duration: 3,
    })

  })



  return (
    <>

{/* data-scroll data-scroll-speed='-1' */}

      <div className="data flex justify-center mb-18">
        <div className="detail w-9/12 flex justify-center shadow-2xl rounded-3x glass3 ">
       
            <div className="w-2/3">
        <video src={vod} loop autoPlay muted className='dvod w-100 rounded-t-3xl rounded-b-3xl z-10' ></video>
              {/* <img src={p1} alt="" className='mt-36 shadow1 ' /> */}
            </div>

            <div className="p-8">
              <div className=' rounded-xl'>
                <p className=' text-orange-500 py-2 text-3xl font-bold'> <span className='bg-orange-800 text-white'>fwafwafaw </span> gfuwabu gwhaig awi <br /> ojg owagiwa jg wajg</p>
                <div className='text-2xl pb-1'>180/100 , As 19H</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eos exercitationem ut sequi! Delectus dolores aspernatur sunt libero id voluptatibus itaque </p>
              </div>

              <button className='px-5 py-3 rounded-3xl bg-slate-300 mt-24 text-xl font-semibold'> NEW COOLING FLAVER  </button>
              <button className='px-5 py-3 rounded-3xl bg-slate-300 mt-24 text-xl font-semibold mx-4'> EXPLORE  </button>
            </div>

          </div>
        </div>
 

    </>
  )
}

export default Details