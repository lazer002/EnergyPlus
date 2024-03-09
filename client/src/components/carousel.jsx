import React from 'react'
import banner from '../assets/banner.png'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


function carousel() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    
   <>
   <div className="container p-3 my-3">

    <div className="border rounded-2xl">
<div className="text-center text-6xl">Hot Product</div>




  {/* <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}
  >
    <div data-src={banner} />
    <div data-src={banner} />
    <div data-src={banner} />
  </AutoplaySlider> */}









</div>

   </div>
   
   </>
  )
}

export default carousel