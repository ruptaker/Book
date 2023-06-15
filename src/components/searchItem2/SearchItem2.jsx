import "./searchItem2.css";

const SearchItem2 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.ibb.co/bg0hBGY/marriot.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Marriot Hotel Kathmandu  </h1>
        <span className="siDistance">100m from center</span>
        <span className="siTaxiOp">City Center</span>
        
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
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem2;

