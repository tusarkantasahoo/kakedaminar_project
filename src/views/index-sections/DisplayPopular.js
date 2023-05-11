import React from "react";
import arrright from "../../assets/customImg/arr-right.png";
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
      </div>
    </>
  );
}

export default DisplayPopular;
