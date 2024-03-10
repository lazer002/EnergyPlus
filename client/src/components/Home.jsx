import React from 'react'
import banner from '../assets/banner.png'
import Carousel from './carousel.jsx'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannertitle from './Bannertitle.jsx';
import Perks from './Perks.jsx';

function home() {

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
<div className="">
      <div className=" carousel p-0 carabg">
        <div className="slider-container absolute left-12 md:left-48 bottom-48">
          <Slider {...settings}>
        
          <div>
             <Bannertitle/>
            </div>
            <div>
            <Bannertitle/>
            </div>
            <div>
            <Bannertitle/>
            </div>
            <div>
            <Bannertitle/>
            </div>
            <div>
            <Bannertitle/>
            </div>
            <div>
            <Bannertitle/>
            </div>
          </Slider>
        </div>
        <div className="b"><img src={banner} className="carousal_slide" /></div>
      </div>

      <Carousel />


<Perks/>
</div>
    </>

  )
}

export default home