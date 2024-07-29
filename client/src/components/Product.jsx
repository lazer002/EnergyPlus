import React, { useRef,useState } from 'react'
import p1 from '../assets/p2.png';
import p2 from '../assets/p1.png';
import p3 from '../assets/p3.png';
import Footer from './footer';
import Card_pro from './Card_pro';

function Product() {    
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  const cards = [
    { id: 1, product: p1, title: 'ADIDAS', subtitle: 'ADIDAS FREE ME LEO faw 2', flavour: 'ORIGINAL fwafwagw', price: '$130' },
    { id: 2, product: p2, title: 'ADIDAS', subtitle: 'ADIDAS FREE ME LEO faw 2', flavour: 'ORIGINAL fwafwagw', price: '$130' },
    { id: 3, product: p3, title: 'ADIDAS', subtitle: 'ADIDAS FREE ME LEO faw 2', flavour: 'ORIGINAL fwafwagw', price: '$130' }
  ];
  
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
    
        <div className="card-container">
      {cards.map((card) => (
        <Card_pro
          key={card.id}
          product={card.product}
          title={card.title}
          subtitle={card.subtitle}
          flavour={card.flavour}
          price={card.price}
          isExpanded={expandedCardId === card.id}
          onCardClick={() => handleCardClick(card.id)}
        />
      ))}
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
