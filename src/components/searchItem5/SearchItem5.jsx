import "./searchItem5.css";

const SearchItem5 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.ibb.co/mX316j7/slider1.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Green Park hotel Chitwan </h1>
        <span className="siDistance">50m from center</span>
        <span className="siTaxiOp">Chitwan National Park </span>
        
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
          <span className="siPrice">$67</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem5;