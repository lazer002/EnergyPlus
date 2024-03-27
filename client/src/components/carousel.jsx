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
    centerMode: true,
    infinite: true,
    centerPadding: "330px",
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
 
  };
  return (
    <>
    
      <div className="shadow-2xl h-screen z-50"  data-scroll data-scroll-speed="5" data-scroll-repeat="true">
        <div className="rounded-2xl shadow-lg px-24">
          <div className="text-center text-6xl pb-5">Hot Product</div>
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



 



    </>
  )
}

export default carousel