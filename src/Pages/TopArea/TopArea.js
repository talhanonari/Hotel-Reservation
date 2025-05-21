import React from "react";
import dateicon from "../../images/Chips Icons Mobile.png";
import timeicon from "../../images/Chips Icons Mobile (1).png";
import membericon from "../../images/Chips Icons Mobile (3).png";
import reacticon from "../../images/Chips Icons Mobile (2).png";
import resturanticon from "../../images/table_restaurant.png";
import Areimg1 from "../../images/Image (1).png";
import Areimg2 from "../../images/Image (2).png";
import arrowdrop from "../../images/arrow_drop_up.png";
import tabimg from "../../images/Menu Icon Mobile (1).png";
import sectionimg2 from "../../images/Tap & Run_MainImage 1.png";
import whitelogo from "../../images/T&R White.png"
import logo1 from "../../images/Logo (1).png"
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./TopArea.css";

export default function Area() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time, adults, children, returnBy } = location.state || {};

  const isFormValid = date && time && adults && children;
  const handleNextClick = () => {
    if (!isFormValid) return;
    navigate("/topDetails", { state: {date, time, adults, children, returnBy}});
  };

  return (
    <div className="AreaaMain" id="choose">
      <div className="AreaimgMain">
      <img src={whitelogo} alt="logo" className="logodata" />
      <img src={sectionimg2} alt="section_" className="Data_imag" />
        <div className="changeMain">
          <div className="changetab"></div>
          <div className="changetab fixd"></div>
          <div className="changetab"></div>
          <div className="changetab"></div>
        </div>
        <Link to="/Select" className="anotherpub">
          CHOOSE ANOTHER PUB
        </Link>
      </div>
      <div className="Ara-main" id="Area--main">
        <div className="Area_type imgdata">
          <img src={logo1} alt="logo" />
        </div>
        <div className="Area_type">
          <h1 className="logo-large datetilte">Pick Your Area</h1>
        </div>
        <div className="Area_type" id="Area_type1">
          <div className="Areatitle_type">
            <img src={dateicon} alt="date_icon" />
            {date ? date : "Select Date"}
          </div>
          <div className="Areatitle_type">
            <img src={timeicon} alt="time_icon" />
            {time ? time : "Select Time"}
          </div>
          <div className="Areatitle_type">
            <img src={membericon} alt="member_icon" />
            {adults || 0}
          </div>
          <div className="Areatitle_type">
            <img src={reacticon} alt="react_icon" />
            {children || 0}
          </div>
          <div className="Areatitle_type">
            <img src={resturanticon} alt="react_icon" />
            Restaurant Area
          </div>
        </div>
        <div className="Area_type">
          <div className="areasection">
            <div className="area_1and2">
              <div className="restArea" id="restArea1">
                <img src={Areimg1} alt="Area_" />
                <p>
                  <h3>Bar Area</h3>
                  <br />
                  (Dog Friendly)
                </p>
              </div>
            </div>
          </div>
          <div className="areasection">
            <div className="area_1and2">
              <div className="restArea">
                <img src={Areimg2} alt="Area_" />
                <p className="Areatextmain" >
                  <h3>Restaurant Area</h3>
                  <Link
                    className="readinfo"
                    id="readinfoo"
                    onClick={() => {
                      document.getElementById("readinfoo").style.display =
                        "none";
                      document.getElementById("readinfoo").style.marginLeft =
                        "0px";
                      document.getElementById("readtextt").style.display =
                        "flex";
                      document.getElementById("hideifo").style.display = "flex";
                      document.getElementById("Area--main").style.marginTop =
                        "10px";
                    }}
                  >
                    Read Info
                    <img src={tabimg} alt="tab_img" />{" "}
                  </Link>
                  <Link
                    className="readinfo"
                    id="hideifo"
                    onClick={() => {
                      document.getElementById("readinfoo").style.display =
                        "flex";
                      document.getElementById("readtextt").style.display =
                        "none";
                      document.getElementById("hideifo").style.display = "none";
                      document.getElementById("hideifo").style.marginLeft = "0px";
                      document.getElementById("Area--main").style.marginTop =
                        "10px";
                    }}
                  >
                    Hide Info
                    <img
                      src={arrowdrop}
                      alt="tab_img"
                      className="dropimg"
                    />{" "}
                  </Link>
                </p>
              </div>
              <h6 className="readtext" id="readtextt">
                If this is the only option available, our indoor dog-friendly
                tables are fully booked. But don't worry—we have plenty of
                outdoor seating available on a first-come, first-served
                basis.Selecting this option means you'll be prioritized for a
                non-dog-friendly area. If those areas are full, you may still be
                seated in our pub section, where dogs are allowed.
              </h6>
            </div>
          </div>
          <Link className="selectbton"> SELECT </Link>
        </div>
        <div className="Area_type">
          <p className="tabletext">
            Your table is required to be returned by {returnBy || "XX:XX PM"}
          </p>
        </div>
        <div className="Area_type DatabtnMain">
          <Link to="/topandrun" className="Area-button" state={{ image: sectionimg2 }}>
            BACK
          </Link>
          <button
            className="Area-button"
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
        <div className="changeTopMainn">
          <div className="changeToptabb"></div>
          <div className="changeToptabb fixd"></div>
          <div className="changeToptabb"></div>
          <div className="changeToptabb"></div>
        </div>
        <div className="Area_type ">
          <Link to="/Select" className="anotherpub2">
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
