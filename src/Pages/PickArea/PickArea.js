import React from "react";
import logo from "../../images/Griffin Black.png";
import sectionimage from "../../images/79205c0e916b529d8d136ce69e32e592.png";
import dateicon from "../../images/Chips Icons Mobile.png";
import timeicon from "../../images/Chips Icons Mobile (1).png";
import membericon from "../../images/Chips Icons Mobile (3).png";
import reacticon from "../../images/Chips Icons Mobile (2).png";
import resturanticon from "../../images/table_restaurant.png";
import Areimg1 from "../../images/TheGriffinInn_OldPubArea.png";
import Areimg2 from "../../images/TheGriffinInn_Stables_NewBarFloor.png";
import arrowdrop from "../../images/arrow_drop_up.png";
import tabimg from "../../images/Menu Icon Mobile (1).png";
import { Link } from "react-router-dom";
import "./PickArea.css";
export default function PickArea() {
  return (
    <div className="AreaMain" id="choose">
      <div className="AreaimgMain">
        <img src={logo} alt="logo" className="logodata" />
        <img src={sectionimage} alt="section_image" className="Data_imag" />
        <div className="changeMain">
          <div className="Changeta"></div>
          <div className="Changeta"></div>
          <div className="Changeta fixedit"></div>
          <div className="Changeta "></div>
          <div className="Changeta"></div>
        </div>
        <Link to="/Select" className="anotherpub">
          CHOOSE ANOTHER PUB
        </Link>
      </div>
      <div className="Area-main" id="Area--main">
        <div className="Area_type imgdata">
          <img src={logo} alt="logo" />
        </div>
        <div className="Area_type">
          <h1 className="logo-large datetilte">Pick Your Area</h1>
        </div>
        <div className="Area_type" id="Area_type1">
          <div className="Areatitle_type">
            <img src={dateicon} alt="date_icon" />
            July 19, 2025
          </div>
          <div className="Areatitle_type">
            <img src={timeicon} alt="time_icon" /> 5:00 PM
          </div>
          <div className="Areatitle_type">
            <img src={membericon} alt="member_icon" />3{" "}
          </div>
          <div className="Areatitle_type">
            <img src={reacticon} alt="react_icon" /> 3{" "}
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
                <img src={Areimg1} alt="Area_" className="Newbrimg"/>
                <p className="Areatextmain">
                <h4>The Old Pub Area</h4>
                  <br />
                  (Dog Friendly)
                </p>
              </div>
            </div>
          </div>
          <div className="areasection">
            <div className="area_1and2">
              <div className="restArea">
                <img src={Areimg2} alt="Area_" className="Newbrimg" />
                <p className="Areatextmain">
                <h4>Stables And New Bar Area</h4>
                  <Link
                    className="readinfo"
                    id="readinfoo"
                    onClick={() => {
                      document.getElementById("readinfoo").style.display =
                        "none";
                      document.getElementById("readtextt").style.display =
                        "flex";
                      document.getElementById("readinfoo").style.marginLeft =
                        "0px";
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
                      document.getElementById("hideifo").style.marginLeft =
                        "0px";
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
            Your table is required to be returned by XX:XX <br /> PM
          </p>
        </div>
        <div className="Area_type DatabtnMain">
          <Link to="/Edit" className="data-button">
            BACK
          </Link>
          <Link to="/ReDetail" className="data-button">
            NEXT
          </Link>
        </div>
        <div className="PickAreaMain">
          <div className="PickAreatab "></div>
          <div className="PickAreatab"></div>
          <div className="PickAreatab fixedit"></div>
          <div className="PickAreatab "></div>
          <div className="PickAreatab "></div>
        </div>
        <div className="Area_type ">
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
