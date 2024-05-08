import React from 'react'
import banner from '../assets/banner.png'
import zoro from '../assets/zoro.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'

import 'react-awesome-slider/dist/styles.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './cards';







function carousel() {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,

  }
  return (
    <>
    
      <div className=' bg-lime-700 py-36 glass2 p-0' data-scroll data-scroll-speed="0.1" data-scroll-repeat="true">
      <div className=" h-screen z-50 bg-3"  >
        <div className="rounded-2xl">
          <div className="text-center text-6xl py-8">Hot Product</div>
          <div className="h-3/4 text-center slerder">
            <Slider {...settings}>
              <Cards cardimage={p3} title='a' />
              <Cards cardimage={p1} title='a' />
              <Cards cardimage={p2} title='a' />
              <Cards cardimage={p3} title='a' />
              <Cards cardimage={p4} title='a' />
              <Cards cardimage={p5} title='a' />
              <Cards cardimage={p6} title='a' />
           
            </Slider>
          </div>
        </div>
      </div>
      </div>



 



    </>
  )
}

export default carousel