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
import p1 from '../assets/p3.png'
import p2 from '../assets/p6.png'
import p3 from '../assets/p5.png'
import p4 from '../assets/p9.png'
import Move from './Move.jsx';
function Home() {

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
<div className="carosel-body">
      <div className=" carousel p-0  relative overflow-hidden">
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
<div className="carousal_bg bg-red-700"></div>
        <div className="b ">
          {/* <div className=""></div> */}
          <img src={banner} className="carousal_slide"/>
          </div>
      </div>
</div>

      <Carousel />
<Details />
<Move/>

{/* <video src={Vod} loop autoPlay muted className='w-100 py-24'></video> */}
<Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/>
<Fourtwo pimg={p2} pname='GREENDRINK' bghover='bg-white'/>
<Fourtwo pimg={p3} pname='REDDRINK' bghover='bg-red-700'/>
<Fourtwo pimg={p4} pname='REDDRINK' bghover='bg-pink-600'/>


<Perks/>
<Footer/>
    </>

  )
}

export default Home