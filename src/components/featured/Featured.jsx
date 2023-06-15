import './feature.css';

import React from 'react'

const Featured = () => {
  return (
<div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/G9qV4Hm/koshi.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Koshi</h1>
          <h2>15 properties</h2>
        </div>
      </div>
      
    
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/Tv2cCvZ/Madesh.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madesh</h1>
          <h2>20 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/jw2Hh3m/Bagmati.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bagmati</h1>
          <h2>23 properties</h2>
          
        </div>

        
        
        
      </div>
    </div>
  );
};

export default Featured
