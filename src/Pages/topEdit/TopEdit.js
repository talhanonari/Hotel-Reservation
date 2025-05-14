import React, { useState } from "react";
import logo from "../../images/Griffin Black.png";
import dateicon from "../../images/Chips Icons Mobile.png";
import timeicon from "../../images/Chips Icons Mobile (1).png";
import membericon from "../../images/Chips Icons Mobile (3).png";
import reacticon from "../../images/Chips Icons Mobile (2).png";
import sectionimg2 from "../../images/Tap & Run_MainImage 1.png";
import whitelogo from "../../images/T&R White.png"
import "./TopEdit.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TopEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const {bookingNumber} = location.state;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [guestError, setGuestError] = useState("");

  const getReturnTime = () => {
    if (!time) return "XX:XX PM";
    const [h, m] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(h));
    date.setMinutes(parseInt(m));
    date.setHours(date.getHours() + 2);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isFormValid = date && time && adults && children && bookingNumber;
  const handleNextClick = () => {
    if (!isFormValid) return;
    navigate("/TopPickArea", {
      state: {
        date,
        time,
        adults,
        children,
        bookingNumber,
        returnBy: getReturnTime(),
      },
    });
  };

  return (
    <div className="griffinnMain" id="choose">
      <div className="DataimgMain">
        <img src={whitelogo} alt="logo" className="logodata" />
        <img src={sectionimg2} alt="section_" className="Data_imag" />
        <div className="changeMain">
          <div className="changetab fixed"></div>
          <div className="changetab"></div>
          <div className="changetab"></div>
          <div className="changetab"></div>
        </div>
        <Link to="/Select" className="anotherpub">
          CHOOSE ANOTHER PUB
        </Link>
      </div>
      <div className="Datamain">
        <div className="Data_type imgdata">
          <img src={logo} alt="logo" />
        </div>
        <div className="Dataa_type">
          <h1 className="logo-large datetilte">Select Date, Time & Guests</h1>
        </div>
        <div className="Dataa_type" id="Data_type1">
          <div className="titlewithicon">
            <img src={dateicon} alt="date_icon" />
            {date ? date : "Select Date"}
          </div>
          <div className="titlewithicon">
            <img src={timeicon} alt="time_icon" />
            {time ? time : "Select Time"}
          </div>
          <div className="titlewithicon">
            <img src={membericon} alt="member_icon" />
            {adults || 0}{" "}
          </div>
          <div className="titlewithicon">
            <img src={reacticon} alt="react_icon" />
            {children || 0}{" "}
          </div>
        </div>
        <div className="Dataa_type">
          {guestError && <p className="text-danger">{guestError}</p>}
          <input
            type="date"
            className="form-control form-control-lg mb-2 selecteopt"
            aria-label="Select Date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onFocus={(e) => e.target.showPicker?.()}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="form-select form-select-lg mb-2 selecteopt"
            aria-label="Select Adults Number"
            value={adults}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value + parseInt(children || 0) <= 10) {
                setAdults(value);
                setGuestError("");
              } else {
                setGuestError("Total guests (adults + children) cannot exceed 10.");
              }
            }}
          >
            <option value="">Select Adults Number</option>
            {[...Array(11).keys()].slice(1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <select
            className="form-select form-select-lg mb-2 selecteopt"
            aria-label="Select Children Number"
            value={children}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (parseInt(adults || 0) + value <= 10) {
                setChildren(value);
                setGuestError("");
              } else {
                setGuestError("Total guests (adults + children) cannot exceed 10.");
              }
            }}
          >
            <option value="">Select Children Number</option>
            {[...Array(11).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="time"
            className="form-control form-control-lg mb-2 selecteopt"
            aria-label="Select Time"
            value={time}
            onFocus={(e) => e.target.showPicker?.()}
            onChange={(e) => setTime(e.target.value)}
          />
          <p className="tabletextedit">
            Your table is required to be returned by {getReturnTime()}
          </p>
        </div>
        <div className="Data_type EditbtnMain">
          <Link to="/TopModify" className="Editbtn">
            BACK
          </Link>
          <button className="Editbtn"
            onClick={handleNextClick}
            disabled={!isFormValid}
            style={{
              backgroundColor: !isFormValid ? "#ccc" : "#000",
              color: !isFormValid ? "#666" : "#fff",
              cursor: !isFormValid ? "not-allowed" : "pointer",
            }}
          >
            NEXT
          </button>
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
          <Link to="/" className="Existlink">
            Exit And Cancel Booking
          </Link>
        </div>
      </div>
    </div>
  );
}
