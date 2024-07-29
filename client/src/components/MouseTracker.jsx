
import React, {useState, useEffect } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div >
    <div
      id="cursor"
      style={{
        position: 'fixed',
        top: position.y + 'px',
        left: position.x + 'px',
        transform: `translate(-50%, -50%)`,
        width: '80px',
        height: '80px',
        border:'1px solid black',
        mixBlendMode: 'multiply',
        borderRadius: '50%',
        zIndex: '2',
        transition: 'transform ease-out 8000ms' 
      }}
    ></div>
    <div
      id="stalker"
      style={{
      
        position: 'fixed',
        top: position.y + 'px',
        left: position.x + 'px',
        transform: `translate(-50%, -50%)`,
        width: '40px',
        height: '40px',
        backgroundColor: 'white',
        borderRadius: '50%',
        zIndex: '1',
        transition: 'transform ease-out 1s 110ms'
      
      }}
    ></div>
  </div>
  
  );
}

export default MouseTracker;
