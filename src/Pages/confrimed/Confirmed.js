import React from "react";
import logo from "../../images/Griffin Black.png";
import sectionimage from "../../images/79205c0e916b529d8d136ce69e32e592.png";
import dateicon from "../../images/Chips Icons Mobile.png";
import timeicon from "../../images/Chips Icons Mobile (1).png";
import membericon from "../../images/Chips Icons Mobile (3).png";
import reacticon from "../../images/Chips Icons Mobile (2).png";
import resturanticon from "../../images/table_restaurant.png";

import "./Confirmed.css";
import { Link } from "react-router-dom";
export default function Confirmed() {
  return (
    <div className="ConfirmMain" id="choose">
      <div className="DetailsimgMain">
        <img src={logo} alt="logo" className="logodata" />
        <img src={sectionimage} alt="section_image" className="Data_imag" />
        <div className="changeMain">
          <div className="Changeta"></div>
          <div className="Changeta"></div>
          <div className="Changeta "></div>
          <div className="Changeta "></div>
          <div className="Changeta fixedit"></div>
        </div>
        <Link to="/Select" className="anotherpub">
          CHOOSE ANOTHER PUB
        </Link>
      </div>
      <div className="Confirm-main">
        <div className="Data_type">
          <h1 className="logo-large datetilte">Confirm Your Details Below</h1>
          <h6>You Are About To Place A Booking At:</h6>
        </div>
        <div className="Data_type" id="Data_type1">
          <div className="Confirmtitle_type">
            <img src={dateicon} alt="date_icon" />
            July 19, 2025
          </div>
          <div className="Confirmtitle_type">
            <img src={timeicon} alt="time_icon" /> 5:00 PM
          </div>
          <div className="Confirmtitle_type">
            <img src={membericon} alt="member_icon" />3{" "}
          </div>
          <div className="Confirmtitle_type">
            <img src={reacticon} alt="react_icon" /> 3{" "}
          </div>
          <div className="Confirmtitle_type">
            <img src={resturanticon} alt="react_icon" />
            Restaurant Area
          </div>
        </div>
          <img src={logo} alt="logo" />
        <h5>Your Booking Info</h5>
        <div className="Data_type inputmain">
          <div className="confirmedData">
            <p className="confirmedDatatype">
              First Name: &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  <span className="namedata">Sophe</span>
            </p>
          </div>
          <div className="confirmedData">
            <p className="confirmedDatatype">
              Last Name:  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;   <span className="namedata">Turner</span>
            </p>
          </div>
          <div className="confirmedData">
            <p className="confirmedDatatype">
              Mobile Number: &nbsp; &nbsp; &nbsp;<span className="namedata">07782 456 913</span>
            </p>
          </div>
          <div className="confirmedData emaildata">
            <p className="confirmedDatatype ">
              Email Address: &nbsp; &nbsp; &nbsp; &nbsp;<span className="namedata">sophie.@email.co.uk</span>
            </p>
          </div>
           <h4 className="comt">Comment</h4>
           <div className="commentsdata">
           "Hi there! We’re celebrating my partner’s birthday, so if possible, we’d love a cozy corner table or something with a bit of atmosphere. Also, one of our guests has a gluten allergy, so if you could let us know about any gluten-free options in advance, that would be amazing. We’ll also be bringing a small birthday cake (happy to pay a plating fee if needed). Thanks so much—we’re really looking forward to it!"
           </div>
        </div>
        <div className="Data_type inputmain">
          <div className="tabletext">
            <p className="checktext">
              I would like to receive news and offers from Tap & Run by email
            </p>
            <input
              className="form-check-input check_box"
              type="checkbox"
              checked
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
        <div className="Data_type ConfirmedbtnMain">
          <Link to="/Updated" className="Confirmedbtn btn1">
            Book A Table
          </Link>
          <Link to="/Details" className="Confirmedbtn btn2">
            Back
          </Link>
        </div>
        <div className="Confirmedmob">
          <div className="Confirmedtab "></div>
          <div className="Confirmedtab"></div>
          <div className="Confirmedtab "></div>
          <div className="Confirmedtab "></div>
          <div className="Confirmedtab fixed"></div>
        </div>
        <div className="Data_type ">
          <Link to="/Select" className="anotherpub2">
            CHOOSE ANOTHER PUB
          </Link>
          <Link to="/" className="Existlink">
            Exit And Cancel Booking
          </Link>
        </div>
      </div>
    </div>
  );
}
