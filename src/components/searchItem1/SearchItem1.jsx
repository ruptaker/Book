import "./searchItem1.css";

const SearchItem1 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.ibb.co/PNp4tv1/photo-of-fishtail-lodge.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Fishtail View & Resort   </h1>
        <span className="siDistance">300m from center</span>
        <span className="siTaxiOp">Fewa lake </span>
        
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

export default SearchItem1;