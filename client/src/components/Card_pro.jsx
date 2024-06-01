import React, { useState } from 'react';

function Card_pro({ product, title, subtitle, flavour, price }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  
    const parentComponent = document.getElementById('parentComponent');
    const parentRect = parentComponent.getBoundingClientRect();
  
    const expandedContainer = document.querySelector('.expanded');
    expandedContainer.style.width = '50%'; // Adjust the width as needed
    expandedContainer.style.height = '50%'; // Adjust the height as needed
  
    // Calculate the top and left position based on the position of the parent component
    const topPosition = parentRect.top + window.pageYOffset;
    const leftPosition = parentRect.left + window.pageXOffset;
  
    expandedContainer.style.top = `${topPosition}px`;
    expandedContainer.style.left = `${leftPosition}px`;
  };

  return (
    <>
     <div className={`border ${expanded ? 'w-screen' : 'w-1/4'} p-8  ${expanded ? 'expanded' : ''}`} onClick={handleClick}>

        <div className="rounded-2xl glass p-6">
          <div className="text-start">
            <div className="text-4xl font-bold">{title}</div>
            <div className="text-md font-normal">{subtitle}</div>
          </div>

          <img src={product} alt="" className={`scale-100 hover:scale-125 ease-in-out transition-all hover:rotate-12 z-50 delay-150 ${expanded ? 'expanded-image' : ''}`} />
          <div className="flex justify-between">
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
    </>
  );
}

export default Card_pro;
