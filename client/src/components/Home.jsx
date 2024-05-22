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
  });

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    verticalSwiping: false,

  };

  return (
    <>

      <div className="" >
        <video src={Vod} loop autoPlay muted className='h-100 z-0' data-scroll data-scroll-speed='-1'></video>
      </div>

      {/* <Carousel /> */}
      <Move />
      <Details />
      {/* <Move /> */}
    


      <div className="wrapper">
        <div className="pages">
          <Fourtwo pimg={p1}  bghover='text-orange-600' sidetext='OrangeTang Flavor'/>
          <Fourtwo pimg={p2}  bghover='bg-white text-black' sidetext='Lemon Flavor' />
          <Fourtwo pimg={p3}  bghover='bg-red-700 text-white' sidetext='Pomegranate Flavor'/>
          <Fourtwo pimg={p4} bghover='bg-pink-600  text-white'sidetext='Lychee Flavor' />
        </div>
      </div>
      <Perks />
      <Footer/>



    </>

  )
}

export default Home