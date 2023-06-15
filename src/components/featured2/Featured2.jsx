import './feature2.css';

import React from 'react'

const Featured2 = () => {
  return (
<div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/BNHHR3J/Sudhur.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sudhur Paschim  </h1>
          <h2>1 Properties</h2>
        </div>
      </div>
      
    
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/0t6zXzW/sikkim.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sikkim </h1>
          <h2>3 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/sHM1wpG/darje.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Darjelling</h1>
          <h2>2 properties</h2>
        </div>
    
        
      </div>
    </div>
  );
};

export default Featured2