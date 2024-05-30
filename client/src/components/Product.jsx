import React from 'react';
import suger from '../assets/p2.png';
import Footer from './footer';

function Product() {
  return (
    <>
 <div className=' my-48 z-40'>
 <div className="flex justify-between text-center relative">
        <div className="border w-1/4 text-xl">HOME - SNEAKER</div>
        <div className="border w-3/4 py-6">
          <div className="text-left text-6xl px-10">Search...</div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="border w-1/4 text-center relative">
          <div className="text-3xl mt-12">FILTER</div>
          <div className="filter p-8">
            <div className="p-2 border text-2xl">Filter 1</div>
            <div className="p-2 border text-2xl">Filter 2</div>
            <div className="p-2 border text-2xl">Filter 3</div>
            <div className="p-2 border text-2xl">Filter 4</div>
          </div>
        </div>  
        <div className="border w-1/4 p-8">
          <div className="rounded-2xl glass p-6">
            <div className="text-start">
              <div className="text-4xl font-bold">ADIDAS</div>
              <div className="text-md font-normal">ADIDAS FREE ME LEO faw 2</div>
            </div>
            
              <img src={suger} alt="" className='scale-100 hover:scale-125 ease-in-out transition-all hover:rotate-12 z-50' />
           
            <div className="flex justify-between">
              <div className="text-start">
                <div className="font-normal text-sm text-green-600">ORIGINAL</div>
                <div className="font-bold text-xl">ORIGINAL fwafwagw</div>
              </div>
              <div>
                <div className="text-4xl font-bold">$130</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border w-1/4">a</div>
        <div className="border w-1/4">a</div>
      </div>
 </div>
      <Footer />
    </>
  );
}

export default Product;
