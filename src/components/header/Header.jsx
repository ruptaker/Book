import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faHotel, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import "./header.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
 
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  
  


  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className='headerListItem active'>
             <FontAwesomeIcon icon={faHotel} />
                 <span>Hotels</span>
           </div>
              <div className='headerListItem'>
               <FontAwesomeIcon icon={faLocationDot} />
                 <span>Explore</span>
              </div>
                 <div className='headerListItem'>
                   <FontAwesomeIcon icon={faMountainSun} />
                     <span>About Nepal</span>
                 </div>
                 <div className='headerListItem'>
                 <img src="https://i.ibb.co/DrG6Js4/mountain-removebg-preview.png" alt="mountain"></img>


                 </div>
        </div>
        {type !== "list" && (
      <>
        <h1 className='headerTitle'>Enjoy your Stay here with us</h1>
      <p className='headerDesc'>
      If you want to achieve a similar effect under
       Windows, open an administrative prompt and 
       execute your command from there. Under Vista,
        this is easily done by opening the shortcut 
        while holding Ctrl+Shift at the same time
      </p>
      <button className='headerBtn'>Sign/Register</button>
      <div className='headerSearch'>
       <div className='headerSearchItem'>
       <FontAwesomeIcon icon={faBed} className='headerIcon' />
       <input type='text' placeholder='Choose your destination' className='headerSearchInput'/>
       
       </div>
       <div className='headerSearchItem'>
       <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'
         onChange={(e) => setDestination(e.target.value)}
       />
       <span
        onClick={() => setOpenDate(!openDate)}
              
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                 <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
  minDate={new Date()}
   />
   )}
   <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
                </div>
              </div>
            </div> 
            </>)}

      
   </div>

   </div>
  );
};

export default Header;
 