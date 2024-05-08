import React from 'react'
import Slider from "react-slick";
import Hcard from './hcard';
function caro() {

    
    
    const ser = {
        // className: "center",
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
  
    };
  return (
      <>
    <div className="text-9xl font-extrabold py-3">FEATURED PRODUCTS</div>
    <div className="">
      <Slider {...ser}>
        
        <Hcard/>
       
        
        <Hcard/>
       
        
        <Hcard/>
       
        
        <Hcard/>
       
        
        <Hcard/>
       
        
        <Hcard/>
       
      </Slider>
    </div>
    </>
  );
}

export default caro