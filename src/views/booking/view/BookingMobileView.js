import React, { useState, useEffect } from "react";
import sit6_avail from "../../../assets/customImg/kdmSeatAssets/6Persons_available.png";
import sit6_occ from "../../../assets/customImg/kdmSeatAssets/6Persons_available.png";
import sit6_blocked from "../../../assets/customImg/kdmSeatAssets/6Persons_blocked.png";
import sit6_booked from "../../../assets/customImg/kdmSeatAssets/6Persons_booked.png";
import sit12_booked from "../../../assets/customImg/kdmSeatAssets/12Persons_booked.png";
import kitchenArea from "../../../assets/customImg/kdmSeatAssets/kitchen_area.png";
import vischoice from "../../../assets/customImg/kdmSeatAssets/visitors-choice.png";
import entrylogo from "../../../assets/customImg/kdmSeatAssets/entrylogo.png";
import reception from "../../../assets/customImg/kdmSeatAssets/reception.png";
import IndexNavbar from "../../../components/Navbars/IndexNavbar.js";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import SlidingPanel from "react-sliding-side-panel";
import SimpleDialog from "@mui/material/Dialog";
// import kitchenArea from "../../assets/customImg/Kitchen Area.png";
import { useHistory } from "react-router-dom";
// reactstrap components
import "../../index-sections/Common.css";

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components

function BookingMobileView() {
  const [hover, setHover] = useState({ sitDetail: 1, isHover: false }); // initial false
  const [smallFlyoutOpen, setSmallFlyoutOpen] = useState(false);
  const HoverData = "6 sitting Table, Available,A 51";
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize);
  const onHover = (e, sitDetails) => {
    e.preventDefault();
    setHover({ sitDetail: sitDetails, isHover: true }); // turn true
    console.log("hovered");
  };

  const onHoverOver = (e, sitDetails) => {
    e.preventDefault(); // turn false
    setHover({ sitDetail: sitDetails, isHover: false });
  };

  var handelClose = (val) => {
    setSmallFlyoutOpen(false);
  };
  return (
    <>
      <IndexNavbar />
      <div className="map-container" style={{ marginLeft: "0%" }}>
        <div
          className="cointainer"
          style={{
            width: "580px",
            border: "4px black",
            borderStyle: "dashed none none dashed",
            // margin: "10px",
            marginTop: "5em",
            marginLeft: "0em",
          }}
        >
          <div
            className="row"
            style={{
              border: "4px black",
              borderStyle: "none dashed none none",
            }}
          >
            <div className="col-6" style={{ padding: "1em 0 0 2em" }}>
              {" "}
              <img style={{ width: "13em" }} src={kitchenArea}></img>
            </div>
            <div className="col-2" style={{ padding: "16px" }}>
              <div style={{ cursor: "pointer" }}>
                {/* if hover is true then only show the text */}
                {hover.isHover && hover.sitDetail === 1 && (
                  <p
                    style={{
                      position: "absolute",
                      zIndex: "10px",
                      backgroundColor: "#e3e3e3",
                      color: "black",
                      marginLeft: "5em",
                      zIndex: "10",
                    }}
                    className={hover}
                  >
                    {HoverData}
                  </p>
                )}
                <img
                  src={sit6_blocked}
                  onMouseEnter={(e) => onHover(e, 1)}
                  onMouseLeave={(e) => onHoverOver(e, 1)}
                  style={{ height: "9em", width: "6em" }}
                  onClick={(e) => setSmallFlyoutOpen(true)}
                ></img>
              </div>
            </div>
            <div className="col-2" style={{ padding: "16px" }}>
              <div style={{ cursor: "pointer" }}>
                {/* if hover is true then only show the text */}
                {hover.isHover && hover.sitDetail === 2 && (
                  <p
                    style={{
                      position: "absolute",
                      zIndex: "10px",
                      backgroundColor: "#e3e3e3",
                      color: "black",
                      marginLeft: "5em",
                      zIndex: "10",
                    }}
                    className={hover}
                  >
                    {HoverData}
                  </p>
                )}
                <img
                  src={sit6_avail}
                  onMouseEnter={(e) => onHover(e, 2)}
                  onMouseLeave={(e) => onHoverOver(e, 2)}
                  onClick={(e) => setSmallFlyoutOpen(true)}
                  style={{ height: "9em", width: "6em" }}
                ></img>
              </div>
            </div>

            <div className="col-2" style={{ padding: "16px" }}>
              <div style={{ cursor: "pointer" }}>
                {/* if hover is true then only show the text */}
                {hover.isHover && hover.sitDetail === 3 && (
                  <p
                    style={{
                      position: "absolute",
                      zIndex: "10px",
                      backgroundColor: "#e3e3e3",
                      color: "black",
                      marginLeft: "5em",
                      zIndex: "10",
                    }}
                    className={hover}
                  >
                    {HoverData}
                  </p>
                )}
                <img
                  src={sit6_booked}
                  onMouseEnter={(e) => onHover(e, 3)}
                  onMouseLeave={(e) => onHoverOver(e, 3)}
                  onClick={(e) => setSmallFlyoutOpen(true)}
                  style={{ height: "9em", width: "6em" }}
                ></img>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{
              border: "4px black",
              borderStyle: "none dashed none none",
              padding: "6px",
            }}
          >
            <div className="col-6" style={{ height: "0em", textAlign: "left" }}>
              {hover.isHover && hover.sitDetail === 7 && (
                <p
                  style={{
                    position: "absolute",
                    zIndex: "10px",
                    backgroundColor: "#e3e3e3",
                    color: "black",
                    marginLeft: "5em",
                    zIndex: "10",
                  }}
                  className={hover}
                >
                  {HoverData}
                </p>
              )}
              <img
                src={sit12_booked}
                onMouseEnter={(e) => onHover(e, 7)}
                onMouseLeave={(e) => onHoverOver(e, 7)}
                onClick={(e) => setSmallFlyoutOpen(true)}
                style={{ height: "14em", width: "6em", marginLeft: "1em" }}
              ></img>
            </div>
            <div
              className="col-2"
              style={{
                padding: "16px",
                marginTop: "10%",
                border: "4px black",
                borderStyle: "none none dashed none",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                {/* if hover is true then only show the text */}
                {hover.isHover && hover.sitDetail === 4 && (
                  <p
                    style={{
                      position: "absolute",
                      zIndex: "10px",
                      backgroundColor: "#e3e3e3",
                      color: "black",
                      marginLeft: "5em",
                      zIndex: "10",
                    }}
                    className={hover}
                  >
                    {HoverData}
                  </p>
                )}
                <img
                  src={sit6_avail}
                  onMouseEnter={(e) => onHover(e, 4)}
                  onMouseLeave={(e) => onHoverOver(e, 4)}
                  onClick={(e) => setSmallFlyoutOpen(true)}
                  style={{ height: "9em", width: "6em" }}
                ></img>
              </div>
            </div>
            <div
              className="col-2"
              style={{
                padding: "16px",
                marginTop: "10%",
                border: "4px black",
                borderStyle: "none none dashed none",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                {/* if hover is true then only show the text */}
                {hover.isHover && hover.sitDetail === 5 && (
                  <p
                    style={{
                      position: "absolute",
                      zIndex: "10px",
                      backgroundColor: "#e3e3e3",
                      color: "black",
                      marginLeft: "5em",
                      zIndex: "10",
                    }}
                    className={hover}
                  >
                    {HoverData}
                  </p>
                )}
                <img
                  src={sit6_booked}
                  onMouseEnter={(e) => onHover(e, 5)}
                  onMouseLeave={(e) => onHoverOver(e, 5)}
                  onClick={(e) => setSmallFlyoutOpen(true)}
                  style={{ height: "9em", width: "6em" }}
                ></img>
              </div>
            </div>
            <div
              className="col-2"
              style={{
                padding: "16px",
                marginTop: "10%",
                border: "4px black",
                borderStyle: "none none dashed none",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                {/* if hover is true then only show the text */}
                {hover.isHover && hover.sitDetail === 6 && (
                  <p
                    style={{
                      position: "absolute",
                      zIndex: "10px",
                      backgroundColor: "#e3e3e3",
                      color: "black",
                      marginLeft: "5em",
                      zIndex: "10",
                    }}
                    className={hover}
                  >
                    {HoverData}
                  </p>
                )}
                <img
                  src={sit6_avail}
                  onMouseEnter={(e) => onHover(e, 6)}
                  onMouseLeave={(e) => onHoverOver(e, 6)}
                  onClick={(e) => setSmallFlyoutOpen(true)}
                  style={{ height: "9em", width: "6em" }}
                ></img>
              </div>
            </div>

            {/* <div
       className="col-1"
       style={{
         padding: "16px",
         marginTop: "10%",
         border: "4px black",
         borderStyle: "none none dashed none",
       }}
     ></div> */}
          </div>

          <div className="row">
            <div className="col-6">
              <div
                className="row"
                style={{
                  border: "4px black",
                  borderStyle: "none dashed dashed none",
                  padding: "6px",
                }}
              >
                <div className="col-6"></div>
                <div
                  className="col-6"
                  style={{
                    height: "9em",
                    width: "5em",
                    // backgroundColor: "#d5d5c7",
                  }}
                >
                  <img
                    style={{ width: "9em", height: "9em" }}
                    src={reception}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                style={{ width: "14em", height: "10em", marginLeft: "2em" }}
                src={vischoice}
              ></img>
            </div>
          </div>
        </div>
        <div>
          <img src={entrylogo} style={{ width: "13em", height: "4em" }}></img>
        </div>
      </div>

      <SwipeableBottomSheet
        overflowHeight={0}
        defaultOpen={false}
        open={smallFlyoutOpen}
        overlay={false}
        onClose={handelClose}
        // style={{ marginLeft: "10%", width: "80%" }}
      >
        <div style={{ height: "25em" }}>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  You have selected A51 seat, Max capacity 6 Persons
                </p>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "15px", marginLeft: "10px" }}>
            Do you want to proceed for Booking ?<br></br>
            <br></br>
            <input value="Enter your name"></input>
            <br></br>
            <br></br>
            <input value="Phoneno"></input>
            <br></br>
            <Button
              onClick={() => {}}
              className="btn-round"
              color="info"
              type="button"
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                setSmallFlyoutOpen(false);
              }}
              className="btn-round"
              color="primary"
              type="button"
            >
              Cancel
            </Button>
          </div>
        </div>
      </SwipeableBottomSheet>
      <div
        style={{ marginTop: "10em", zIndex: "10px", backgroundColor: "black" }}
      >
        Privacy Policy
      </div>
    </>
  );
}

export default BookingMobileView;
