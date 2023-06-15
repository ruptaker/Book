import './feature1.css';

import React from 'react'

const Featured1 = () => {
  return (
<div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/4FNPVHD/Gandaki.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gandaki </h1>
          <h2>12 Properties</h2>
        </div>
      </div>
      
    
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/y5xd8yR/Lumbini.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lumbini </h1>
          <h2>3 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/T8gBkM0/Karnali.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Karnali</h1>
          <h2>2 properties</h2>
        </div>
        
        
      </div>
    </div>
  );
};

export default Featured1
