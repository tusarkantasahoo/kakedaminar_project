import React from "react";
import { useEffect, useState } from "react";
// reactstrap components
import mobileview1 from "../../assets/mobileresources/Kake Da Minar App.png";
import desktopView2 from "../../assets/mobileresources/MacBook Air_desktp1.png";
import mobileview2 from "../../assets/mobileresources/mobilebooking.png";
import andioswin from "../../assets/mobileresources/25-255634_ios-android-and-windows-icon-png-download-windows.png";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button,
} from "reactstrap";

function LocationAddress() {
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2em",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: "450",
                  fontSize: "25px",
                  marginTop: "2em",
                }}
              >
                Access our application on any device.
              </p>
              <p>
                Kakeda minar website and booking page is now can be accessed
                from any device to book/reserve the seat before visiting.
              </p>
              <div>
                <img
                  src={andioswin}
                  style={{
                    width: "60%",
                    marginTop: "5em",
                    backgroundColor: "white",
                    opacity: "0.25",
                  }}
                />
              </div>
            </div>
            <img
              src={mobileview1}
              style={{ width: "20em", height: "40em", marginLeft: "auto" }}
            ></img>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          // marginLeft: "18em",
          marginTop: "2em",
        }}
      >
        <div style={{ minWidth: "50em" }}>
          <div classname="text-center">
            <p style={{ fontWeight: "400" }}>Navigate to the location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13405.983827515693!2d85.81741289999998!3d20.3263467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1038e1cc6f4ffefa!2sKake%20Da%20Minar!5e1!3m2!1sen!2sin!4v1665737489924!5m2!1sen!2sin"
              style={{ border: "0", width: "100%", height: "27em" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div style={{ padding: "2em", width: "20em" }}>
          <p>Contact me</p>
          <p>Tusar Kanta Sahoo sahoo.</p>
          <p>Email - tusharkanta21@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default LocationAddress;
