// src/Card_pro.js
import React, { useRef, useEffect } from 'react';


function Card_pro({ product, title, subtitle, flavour, price, isExpanded, onCardClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        if (isExpanded) {
          onCardClick(); // Close the card if clicked outside
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isExpanded, onCardClick]);

  return (
    <>
      <div
        ref={cardRef}
        className={`border relative ${isExpanded ? 'w-50' : 'w-1/4'} p-8`}
        onClick={onCardClick}
      >
        <div className="rounded-2xl glass p-6">
          <div className={`text-start ${isExpanded ? 'second' : 'first'}`}>
            <div className="text-4xl font-bold">{title}</div>
            <div className="text-md font-normal">{subtitle}</div>
          </div>
          <div className='flex justify-center'>
            <div>
              <img
                src={product}
                alt={title}
                className={`card-image ${isExpanded ? 'expanded-image' : ''}`}
              />
            </div>
            <div className={`${isExpanded ? 'first' : 'second'}`}>
              <div>ORIGINAL afaaaaaaaaaaa</div>
              <div className="font-bold text-9xl">{flavour}</div>
              <div className="text-4xl font-bold">{price}</div>
              <div className="text-4xl font-bold mt-6 ">{price}</div>
            </div>
          </div>

          <div className={`flex justify-between ${isExpanded ? 'hidden' : 'first'}`}>
            <div className="text-start">
              <div className="font-normal text-sm text-green-600">ORIGINAL</div>
              <div className="font-bold text-xl">{flavour}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{price}</div>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-container">
          <div className="expanded">
            <img src={product} alt={title} className="expanded-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default Card_pro;
