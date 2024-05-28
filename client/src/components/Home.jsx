import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import banner from '../assets/da.png'
import Carousel from './carousel.jsx'
import '../css/hscroll.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannertitle from './Bannertitle.jsx';
import Perks from './Perks.jsx';
import Details from './details.jsx';
import Vod from '../assets/video/v3.webm'
//  import Sliderrr from './slider.jsx'
// import Vod2 from '../assets/video/v.mp4'
import Footer from './Footer.jsx';
import Fourtwo from './fourtwo.jsx';
import p1 from '../assets/p3.png'
import p2 from '../assets/p6.png'
import p3 from '../assets/p5.png'
import p4 from '../assets/p9.png'
import Move from './Move.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import Crd_caro from './crd_caro.jsx';


function Home() {

  const locomotiveScroll = new LocomotiveScroll()

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const section = gsap.utils.toArray('.page')

    gsap.to(section, {
      xPercent: -100 * (section.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.pages',
        pin: true,
        scrub: 1,
        end: '+=5000'
      }
    })
    gsap.to('.offertext' , {
      transform:'translateX(-300%)',
      scrollTrigger:{
        trigger:'offertext',
        scrub:3,
  
      }
    })
    gsap.from('.offertext1' , {
      transform:'translateX(-300%)',
      scrollTrigger:{
        trigger:'offertext1',
        scrub:3,
  
      }
    })
  });

  return (
    <>

      <div className="banner" >
        <video src={Vod} loop autoPlay muted className='h-100 z-0' data-scroll data-scroll-speed='-1'></video>
      </div>

      {/* <Carousel /> */}
      <Move />
      
      <Details />
      <div className="text-banner  bg-black relative -bottom-16  rotate-1 z-50 overflow-hidden">
        <div className="offertext flex border-2 border-white py-2">
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
  
        </div>
      </div>

      <div className="text-banner bg-black relative -bottom-24 -rotate-1 z-50">
        <div className="offertext1 flex border-2 border-white py-2 text-left">
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
  
        </div>
      </div>

      <div className="text-banner bg-black relative py-12 rotate-3 -top-4 -left-2 z-40">
        <div className="offertext1 flex border-2 border-white  text-left">
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
  
        </div>
      </div>
      <div className="text-banner bg-black relative -rotate-1 z-50 overflow-hidden -top-12">
        <div className="offertext flex border-2 border-white py-2">
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
          <div className=' whitespace-nowrap px-8'>$  Get Discount Up TO 30%  $</div>
  
        </div>
      </div>
      <div className="wrapper -top-20">
        <div className="pages">
          <Fourtwo pimg={p1} bghover='bg-orange-600 text-white' sidetext='OrangeTang Flavor' index={0} />
          <Fourtwo pimg={p2} bghover='bg-white text-black' sidetext='Lemon Flavor' index={1} />
          <Fourtwo pimg={p3} bghover='bg-red-700 text-white' sidetext='Pomegranate Flavor' index={2} />
          <Fourtwo pimg={p4} bghover='bg-pink-600 text-white' sidetext='Lychee Flavor' index={3} />
        </div>
      </div>



      <Perks />

      <Footer />



    </>

  )
}

export default Home