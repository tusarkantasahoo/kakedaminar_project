import React from "react";
import { useEffect, useState } from "react";
// reactstrap components
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
    </>
  );
}

export default LocationAddress;
