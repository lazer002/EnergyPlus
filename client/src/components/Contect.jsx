import React,{useEffect} from 'react'

import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import p1 from '../assets/p3.png'
import Fourtwo from './fourtwo';

function Contect() {

  gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
const section = gsap.utils.toArray('.page')
console.log(section);
gsap.to(section,{
        xPercent: -100 * (section.length - 1),
        ease:'none',
        scrollTrigger:{
            trigger:'.pages',
            pin:true,
            scrub:1,
            end:'+=6000'
        }
})
}); 
 

  return (
    <>

<div className="h100">ofwafwafwafne</div>
<div className="wrapper">      

<div className="pages">
        <div className="page "><Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/></div>
        <div className="page "><Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/></div>
        <div className="page "><Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/></div>
        <div className="page "><Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/></div>
        <div className="page "><Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/></div>
        <div className="page "><Fourtwo pimg={p1} pname='ORANGEDRINK' bghover='bg-orange-600'/></div>

      </div>
      </div>
      <div className="h100">ofwafawfawfane</div>
</>
  );

}

export default Contect