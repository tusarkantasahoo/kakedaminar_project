import React, { useState } from "react";
import arrright from "../../assets/customImg/arr-right.png";
import menu from "../../assets/mobileresources/381d6ce38084f476e4240a495ce46494.jpg";
// reactstrap components
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
} from "reactstrap";
import "./Common.css";
// core components
function DisplayPopular() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [clickedData, setClickedData] = useState({});
  var nearby = [
    { name: "Lunch", bgcol: "#3d6445" },
    { name: "Dinner", bgcol: "#a14242" },
    { name: "Breakfast", bgcol: "black" },
    { name: "Happy Hour", bgcol: "gray" },
  ];

  return (
    <>
      <div className="container">
        <p style={{ fontWeight: "400" }}>Checkout our Menu</p>
        <div className="row">
          {nearby.map((item, id) => {
            return (
              <>
                <div
                  className="col xl-3 md-4  sm-6"
                  style={{
                    backgroundColor: item.bgcol,
                    border: "1px solid #cbbcbc",
                    height: "10em",
                    margin: "1px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsMenuClicked(!isMenuClicked);
                    setClickedData(item);
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      margin: "2px",
                      fontWeight: "500",
                      fontSize: "20px ",
                    }}
                  >
                    {item.name}
                    {/* <img src={arrright}></img> */}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        {isMenuClicked ? (
          <div
            style={{
              width: "100%",
              backgroundColor: clickedData.bgcol,
              transition: "all 1s",
              height: "50em",
              display: "flex",
            }}
          >
            <img
              src={menu}
              style={{
                width: "auto",
                height: "50em",
              }}
            />
            <div
              style={{
                color: "white",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Offers
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Hi we are having flat 30% off on all purchases. Enjoy your
                meals.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default DisplayPopular;
