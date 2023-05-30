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

function Reviews() {
  var collection = [
    {
      title:
        "Best Punjabi restaurant in Bhubaneswar ? // Kake da minar // Best and cheapest thali.",
      thumbnail:
        "https://i.ytimg.com/vi/OfxtX13Da5M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBajROMCHLmi1yC5_6an3069OhhYg",
      url: "https://www.youtube.com/watch?v=OfxtX13Da5M",
    },
    {
      title:
        "|| KaKe Da Minar || BHUBANESWAR Best Punjabi Restaurant || Best lassi in Bhubaneswar ||",
      thumbnail:
        "https://i.ytimg.com/vi/nXiDhGCadME/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDig3Yjftiahy7YnloU8S5z22rXgg",
      url: "https://www.youtube.com/watch?v=nXiDhGCadME",
    },
    {
      title:
        "|| KaKe Da Minar || BHUBANESWAR Best Punjabi Restaurant || Best lassi in Bhubaneswar ||",
      thumbnail:
        "https://i.ytimg.com/vi/nXiDhGCadME/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDig3Yjftiahy7YnloU8S5z22rXgg",
      url: "https://www.youtube.com/watch?v=nXiDhGCadME",
    },
    {
      title:
        "|| KaKe Da Minar || BHUBANESWAR Best Punjabi Restaurant || Best lassi in Bhubaneswar ||",
      thumbnail:
        "https://i.ytimg.com/vi/nXiDhGCadME/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDig3Yjftiahy7YnloU8S5z22rXgg",
      url: "https://www.youtube.com/watch?v=nXiDhGCadME",
    },
  ];
  return (
    <>
      {/* <div className="container">
        <p style={{ fontWeight: "400" }}>YouTube Reviews</p>
        <div className="container-fluid">
          <div className="row">
            {collection.map((item, id) => {
              return (
                <div
                  className="col col-xl-2 col-sm-6 col-md-3"
                  style={{ backgroundColor: "white", margin: "5px" }}
                >
                  <img src={item.thumbnail} style={{ width: "100%" }}></img>
                  <p style={{ fontSize: "11px", fontWeight: "550" }}>
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Reviews;
