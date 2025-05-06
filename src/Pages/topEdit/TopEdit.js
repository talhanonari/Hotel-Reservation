import React from "react";
import logo from "../../images/Griffin Black.png";
import sectionimage from "../../images/79205c0e916b529d8d136ce69e32e592.png";
import dateicon from "../../images/Chips Icons Mobile.png";
import timeicon from "../../images/Chips Icons Mobile (1).png";
import membericon from "../../images/Chips Icons Mobile (3).png";
import reacticon from "../../images/Chips Icons Mobile (2).png";
import logo1 from "../../images/Logo (1).png";
import sectionimg2 from "../../images/Tap & Run_MainImage 1.png";
import whitelogo from "../../images/T&R White.png"
import "./TopEdit.css";
import { Link } from "react-router-dom";
export default function TopEdit() {
  return (
    <div className="EdiMain" id="choose">
      <div className="DataimgMain">
        <img src={whitelogo} alt="logo" className="logodata" />
        <img src={sectionimg2} alt="section_image" className="Data_imag" />
        <div className="changeMain">
          <div className="Changeta"></div>
          <div className="Changeta fixedit"></div>
          <div className="Changeta"></div>
          <div className="Changeta "></div>
          <div className="Changeta"></div>
        </div>
        <Link to="/Select" className="anotherpub">
          CHOOSE ANOTHER PUB
        </Link>
      </div>
      <div className="Datamain">
        <div className="Data_type imgdata">
          <img src={logo1} alt="logo" />
        </div>
        <div className="Data_type">
          <h1 className="logo-large datetilte">Edit Date, Time & Guests</h1>
        </div>
        <div className="Data_type" id="Data_type1">
          <div className="title_icon">
            <img src={dateicon} alt="date_icon" />
            July 19, 2025
          </div>
          <div className="title_icon">
            <img src={timeicon} alt="time_icon" /> 5:00 PM
          </div>
          <div className="title_icon">
            <img src={membericon} alt="member_icon" />3{" "}
          </div>
          <div className="title_icon">
            <img src={reacticon} alt="react_icon" /> 3{" "}
          </div>
        </div>
        <div className="Data_type">
          <select
            class="form-select form-select-lg mb-2 selecterdata"
            aria-label=".form-select example"
          >
            <option selected>Select Date</option>
            <option value="1">July 19, 2025</option>
          </select>
          <select
            class="form-select form-select-lg mb-2 selecterdata"
            aria-label=".form-select example"
          >
            <option selected>Select Adults Number</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
          </select>
          <select
            class="form-select form-select-lg mb-2 selecterdata"
            aria-label=".form-select example"
          >
            <option selected>Select Children Number</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <p className="eg">2000 of 2000 characters remaining</p>
          </select>
          <select
            class="form-select form-select-lg mb-2 selecterdata"
            aria-label=".form-select example"
          >
            <option selected>Select Time</option>
            <option value="1">12:00</option>
            <option value="1">12:00</option>
            <option value="1">12:00</option>
            <option value="1">12:00</option>
            <option value="1">12:00</option>
          </select>
          <p className="tabletextedit">
            Your table is required to be returned by XX:XX <br /> PM
          </p>
        </div>
        <div className="Data_type EditbtnMain">
          <Link to="/TopModify" className="Editbtn">
            BACK
          </Link>
          <Link to="/TopPickArea" className="Editbtn">
            NEXT
          </Link>
        </div>
        <div className="EditMainmob">
          <div className="Edittab "></div>
          <div className="Edittab fixedit"></div>
          <div className="Edittab"></div>
          <div className="Edittab "></div>
          <div className="Edittab "></div>
        </div>
        <div className="Data_type ">
          <Link to="" className="anotherpub2">
            CHOOSE ANOTHER PUB
          </Link>
          <Link to="/TopHome" className="Existlink">
            Exit And Cancel Booking
          </Link>
        </div>
      </div>
    </div>
  );
}
