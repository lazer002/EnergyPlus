import React from 'react'
import p1 from '../assets/p1.png'
import '../js/animation.js'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Details() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".detail", {
      scrollTrigger: {
        trigger: ".d",
        start: "20px 80%",
        scrub: 2
      },
      scale: 1.3,
      duration: 3,
    })
  })



  return (
    <>
      <div className="d">
        <div className="detail container flex justify-center shadow-2xl rounded-3xl bg-3 ">

          <div className="w-full border-gray-50">
            <img src={p1} alt="" className='mt-36 shadow1' />
          </div>
          <div className=" border-gray-50 pt-12">
            <div className='text-4xl'>hufwafbwa gfwah gwagwag</div>
            <div className='text-lg py-3'>O HFWIAN GWGOWJO ?</div>
            <div className='grid grid-cols-2 gap-6 w-2/4'>
              <div className=" p-4 rounded-tr-3xl rounded-bl-3xl border border-l-red-800  glass br-1">
                <p className='text-cyan-400 py-2'> <span className='bg-cyan-800 text-white'>fwafwafaw </span> gfuwabu gwhaig awi <br /> ojg owagiwa jg wajg</p>
                <div className='text-2xl pb-1'>180/100 , As 19H</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eos exercitationem ut sequi! Delectus dolores aspernatur sunt libero id voluptatibus itaque </p>
              </div>

              <div className="p-4 rounded-tr-3xl rounded-bl-3xl border border-l-red-800  mt-24 glass br-1">
                <p className='text-cyan-400 py-2'> <span className='bg-cyan-800 text-white'>fwafwafaw </span> gfuwabu gwhaig awi <br /> ojg owagiwa jg wajg</p>
                <div className='text-2xl pb-1'>180/100 , As 19H</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eos exercitationem ut sequi! Delectus dolores aspernatur sunt libero id voluptatibus itaque </p>
              </div>

              <div className="p-4 rounded-tr-3xl rounded-bl-3xl border border-l-red-800  mb-24 glass br-1">
                <p className='text-cyan-400 py-2'> <span className='bg-cyan-800 text-white'>fwafwafaw </span> gfuwabu gwhaig awi <br /> ojg owagiwa jg wajg</p>
                <div className='text-2xl pb-1'>180/100 , As 19H</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eos exercitationem ut sequi! Delectus dolores aspernatur sunt libero id voluptatibus itaque </p>
              </div>

              <div className="p-4 rounded-tr-3xl rounded-bl-3xl border border-l-red-800  glass br-1">
                <p className='text-cyan-400 py-2'> <span className='bg-cyan-800 text-white'>fwafwafaw </span> gfuwabu gwhaig awi <br /> ojg owagiwa jg wajg</p>
                <div className='text-2xl pb-1'>180/100 , As 19H</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eos exercitationem ut sequi! Delectus dolores aspernatur sunt libero id voluptatibus itaque </p>
              </div>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Details