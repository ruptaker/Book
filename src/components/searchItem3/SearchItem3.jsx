import "./searchItem3.css";

const SearchItem3 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.ibb.co/GkGCcnN/367397409.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Sarangkot  Mountain Lodge  </h1>
        <span className="siDistance">100m from center</span>
        <span className="siTaxiOp">Pokhara City View </span>
        
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$92</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem3;