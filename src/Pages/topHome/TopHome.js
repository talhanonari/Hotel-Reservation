import React from "react";
import "./TopHome.css";
import { Link } from "react-router-dom";
import sectionimage from "../../images/79205c0e916b529d8d136ce69e32e592.png";
import tablebookingimg from "../../images/table_restaurant.png";
import modifyimg from "../../images/edit_calendar.png";
import cancelimg from "../../images/Menu Icon Mobile.png";
import tabimg from "../../images/Menu Icon Mobile (1).png";
import logo from "../../images/Griffin Black.png";
import alertimg from "../../images/alert-circle.png";
import logo1 from "../../images/Logo (1).png";
import sectionimg2 from "../../images/Tap & Run_MainImage 1.png";
import whitelogo from "../../images/T&R White.png"
function TopHome() {
  return (
    <>
      <div className="homeMain" id="homepage">
        <div className="section imagesect">
          <img
            src={sectionimg2}
            alt="section_image"
            className="section_image"
          />
          <Link to="/" className="anotherpub">CHOOSE ANOTHER PUB</Link>
        </div>
        <div className="section bookingcontainer">
          <img src={logo1} alt="logo" />
          <div className="logo-large">Booking</div>
          <div className="titlehome">Plan, Modify, Or Cancel Your Reservation</div>
          <div
            className="bookingttype"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            <div className="book-text">
              <img src={tablebookingimg} alt="bookingtableimg" />
              Book A Table
            </div>
            <img src={tabimg} alt="tab-img" />
          </div>

          <div className="bookingttype">
              <Link to="/TopModify" className="modifylink">
            <div className="book-text">
              <img src={modifyimg} alt="modify-image" />
                Modify A Booking
            </div>
            <img src={tabimg} alt="tab-img" />
              </Link>
          </div>

          <div className="bookingttype changeborder">
          <Link to="/TopCancel" className="modifylink">
            <div className="book-text" id="cancelid">
              <img src={cancelimg} alt="cancel-img" />
              Cancel A Booking
            </div>
            <img src={tabimg} alt="tab-img" />
            </Link>
          </div>
          <Link to="/" className="anotherpub2">
            CHOOSE ANOTHER PUB
          </Link>
          <div>
            <Link href="#" className="Existlink">
              Back To The Site
            </Link>
          </div>
          {/* Popup */}
          <div
            className="modal fade mainpop"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabindex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                    <img src={alertimg} alt="alert_img" />
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h2 className="logo-large">Please Note:</h2>
                  Our max table size is 10 people.Cat & Wickets pubs are
                  cashless — card or contactless payments only.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary confirmbtn"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    <Link to="/Select" className="btn btn-primary confirmbtn">
                      CONFIRM
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Select */}
    </>
  );
}
export default TopHome;
