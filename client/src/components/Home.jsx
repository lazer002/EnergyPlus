import React from 'react'
import banner from '../assets/banner.png'
import Carousel from './carousel.jsx'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannertitle from './Bannertitle.jsx';
import Perks from './Perks.jsx';
import Details from './details.jsx';
 import Sliderrr from './slider.jsx'
 import Vod from '../assets/video/0c51fe16719840f6b316f72f1389ed5b.SD-480p-1.2Mbps-24780803.mp4'
import Footer from './footer.jsx';
import Fourtwo from './fourtwo.jsx';
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
<div className="carosel-body bg5 ">
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
        <div className="b">
          <div className=""></div>
          <img src={banner} className="carousal_slide " />
          </div>
      </div>
</div>
      <Carousel />
<Details />

<video src={Vod} loop autoPlay muted className='w-100 py-24'></video>
<Fourtwo/>

<Perks/>
<Footer/>
    </>

  )
}

export default home