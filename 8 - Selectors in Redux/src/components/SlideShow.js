import React from 'react';
import background from './background.jpg';
import './SlideShow.css';

export default function SlideShow(){
  return (
    <div className='slideshow' style={{ backgroundImage: `url(${background})` }}>
    </div>
  );
};
