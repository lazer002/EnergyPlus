
import React from 'react'
import ReactCardCarousel from 'react-card-carousel';
import Card from './Card.jsx';
import p3 from '../assets/p5.png'

function Crd_caro() {
  return (
    <>
    
<ReactCardCarousel autoplay={true} autoplay_speed={2500}>

<Card crs_img={p3} crs_name='ANDROID' />
<Card crs_img={p3} crs_name='C LANGUAGE' />
<Card crs_img={p3} crs_name='PYTHON' />
<Card crs_img={p3} crs_name='WEB DESIGNING' />
<Card crs_img={p3} crs_name='DIGITAL MARKETING' />
<Card crs_img={p3} crs_name='C++' />
<Card crs_img={p3} crs_name='ANGULAR' />
<Card crs_img={p3} crs_name='SQL' />
<Card crs_img={p3} crs_name='HTML5' />
<Card crs_img={p3} crs_name='JAVA' />
<Card crs_img={p3} crs_name='PHP' />
<Card crs_img={p3} crs_name='BOOTSTRAP' />
<Card crs_img={p3} crs_name='JQUERY' />

</ReactCardCarousel>
    
    
    </>
  )
}

export default Crd_caro