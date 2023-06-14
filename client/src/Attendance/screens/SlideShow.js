import React, { useState, useEffect } from 'react';
// import "style.css"
const SlideShow = ({ images, interval }) => {
  const [currentImage, setCurrentImage] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div style={{height:"100%"}}>
      <img style={{width:"100%"}} src={images[currentImage]} alt="Slide" />
    </div>
  );
};

export default SlideShow;