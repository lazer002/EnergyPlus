import React from 'react'
import zoro from '../assets/zoro.png'
import banner from '../assets/banner.png'

function Cards(props) {
  return (
    <>
<div className="w-full mx-8 ">
            <div className="bg-white rounded-lg overflow-hidden mb-10 shadow1 glass">
               <img
                  src={props.cardimage}
                  alt="image"
                  className="w-full shadow1"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                   
                     {props.title}
                 
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                
                  View Details
              
               </div>
            </div>
         </div>


    
    </>
  )
}

export default Cards