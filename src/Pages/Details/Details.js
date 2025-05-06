import React from "react";
import logo from "../../images/Griffin Black.png";
import sectionimage from "../../images/79205c0e916b529d8d136ce69e32e592.png";
import dateicon from "../../images/Chips Icons Mobile.png";
import timeicon from "../../images/Chips Icons Mobile (1).png";
import membericon from "../../images/Chips Icons Mobile (3).png";
import reacticon from "../../images/Chips Icons Mobile (2).png";
import resturanticon from "../../images/table_restaurant.png";
import logo1 from "../../images/Logo (1).png";
import sectionimg2 from "../../images/Tap & Run_MainImage 1.png";
import TextField from "@mui/material/TextField";
import "./Details.css";
import { Link } from "react-router-dom";
export default function Details() {
  return (
    <div className="DetailsMain" id="choose">
      <div className="DetailsimgMain">
        <img src={logo} alt="logo" className="logodata" />
        <img src={sectionimage} alt="section_" className="Data_imag" />
        <div className="changeMain">
          <div className="changetab"></div>
          <div className="changetab"></div>
          <div className="changetab fixedit"></div>
          <div className="changetab"></div>
        </div>
        <Link to="/Select" className="anotherpub">
          CHOOSE ANOTHER PUB
        </Link>
      </div>
      <div className="Dmain">
        <div className="Data_type imgdata">
          <img src={logo} alt="logo" />
        </div>
        <div className="Data_type">
          <h1 className="logo-large datetilte">Enter Your Details</h1>
        </div>
        <div className="Data_type" id="Data_type1">
          <div className="Detailtitle_type">
            <img src={dateicon} alt="date_icon" />
            July 19, 2025
          </div>
          <div className="Detailtitle_type">
            <img src={timeicon} alt="time_icon" /> 5:00 PM
          </div>
          <div className="Detailtitle_type">
            <img src={membericon} alt="member_icon" />3{" "}
          </div>
          <div className="Detailtitle_type">
            <img src={reacticon} alt="react_icon" /> 3{" "}
          </div>
          <div className="Detailtitle_type">
            <img src={resturanticon} alt="react_icon" />
            Restaurant Area
          </div>
        </div>
        <div className="Data_type inputmain">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue="Enter your first name"
            className="inputfeild"
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            defaultValue="Enter your last Name"
            className="inputfeild"
          />
          <div className="textfieldMain">
            <TextField
              required
              id="outlined-required"
              label="Mobile Number"
              defaultValue="Enter your mobile number"
              className="inputfeild feildproblem"
            />
            <p className="eg">E.G. 07123 456789</p>
          </div>
          <div className="textfieldMain">
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              defaultValue="Enter a valid email"
              className="inputfeild feildproblem"
            />
            <p className="eg">E.G. Name@gmail.com</p>
          </div>
          <div className="textfieldMain">
            <input
              type="date"
              id="dateInput"
              className="inputfeild feildproblem comments inputunik"
            />
            <p className="eg">Date of Birth</p>
          </div>

          <div className="textfieldMain">
            <TextField
              required
              id="outlined-required"
              label="Comment"
              defaultValue="Let us know if you have dietary needs, accessibility requests, or anything else "
              className="inputfeild feildproblem comments"
            />
            <p className="eg">2000 of 2000 characters remaining</p>
          </div>
          <div className="tabletext">
            <p className="checktext">
              I would like to receive news and offers from Tap & Run by email
            </p>
            <input
              className="form-check-input check_box"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
        <div className="Data_type DetailbnMain">
          <Link
            to="/Area"
            className="detailbutton"
          >
            BACK
          </Link>
          <Link
            to="/Confirm"
            className="detailbutton"
          >
            NEXT
          </Link>
        </div>
        <div className="DetailsMainmob">
          <div className="Detailstab "></div>
          <div className="Detailstab"></div>
          <div className="Detailstab fixed"></div>
          <div className="Detailstab"></div>
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
