import React from 'react'
import suger from '../assets/Sugar.avif'
import Amazing from '../assets/Amazing.avif'
import Thunder from '../assets/Thunder.avif'
function Perks() {
    return (
        <>
            <div className="container py-36 " data-scroll data-scroll-speed=".1">
                <div className="flex justify-evenly text-center">
               
                    <div >
                        <div className="bg-orange-900 rounded-2xl size-48 shadow-2xl hover:scale-105 relative flex items-center justify-center ">
                            <img src={Thunder} alt="" className='size-24 hover:scale-95' />
                        </div>

                        <div className='py-5 text-center'>
                            <h1>INCREASED ENERGY</h1>
                            <h3>200MG CAFFEINE</h3>
                            <p>PERFECT FOR THE BOOST <br /> YOU NEED </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-orange-900 rounded-lg size-48 shadow-2xl hover:scale-105 relative flex items-center justify-center">
                            <img src={suger} alt="" className='size-24 hover:scale-95' />
                        </div>

                        <div className='py-5 text-center'>
                            <h1>ZERO SUGAR</h1>
                            <h3>LOW-CARB & UNDER</h3>
                            <p>20 CALORIES</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-orange-900 rounded-lg size-48 shadow-2xl hover:scale-105 relative flex items-center justify-center">
                            <img src={Amazing} alt="" className='size-24 hover:scale-95' />
                        </div>

                        <div className='py-5 text-center'>
                        <h1>AMAZING FLAVORS</h1>
                        <p>LESS CARBONATION, CLEAN,<br /> CRISP AND REFRESHING</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Perks