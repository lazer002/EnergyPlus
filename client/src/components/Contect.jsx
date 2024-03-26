import React,{useEffect} from 'react'
import '../css/hscroll.css'
import Gsap from "gsap";
import scrollTrigger from 'gsap/ScrollTrigger';
import p1 from '../assets/p3.png'


function Contect() {
  Gsap.registerPlugin(scrollTrigger);
// const con = document.querySelector('.ff')
const sections = Gsap.utils.toArray('.penel')


let scroltwe = Gsap.to('.penel',{
  xPercent: -100 * (sections.length -1),
  ease:'none',
  scrollTrigger:{
    trigger:'.ff',
    pin:true,
    scrub:1,
  end:'+=3000'  }
})


  return (
    <>

<div className="co">      
<div className="h-screen w-screen bg-blue-500">one</div>

<div className="ff">
        <div className="penel  bg-red-500">one</div>
        <div className="penel  bg-yellow-500">two</div>
        <div className="penel  bg-orange-500">three</div>
        <div className="penel  bg-green-500">four</div>
        <div className="penel  bg-purple-500">five</div>
        <div className="penel  bg-blue-500">six</div>
      </div>
      </div>

</>
  );

}

export default Contect