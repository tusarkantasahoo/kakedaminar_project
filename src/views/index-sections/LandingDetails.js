import React from "react";
import kdm from "../../assets/customImg/Kakedaminarlogo1.png";
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
import { useHistory } from "react-router-dom";
function LandingDetails() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const history = useHistory();
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

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
  return (
    <>
      <div className="">
        <div
          className="container"
          style={{ width: "100%", backgroundColor: "#ffffff" }}
        >
          <div className="row">
            {windowSize.innerWidth > 550 ? (
              <div className="col-6" style={{ backgroundColor: "#ffffff" }}>
                <p
                  style={{
                    fontSize: "1.5em",
                    marginTop: "7em",
                    fontWeight: "500",
                  }}
                >
                  Enjoy Your Healthy Delicious Food
                </p>
                <p
                  style={{
                    fontSize: "1em",
                    fontWeight: "450",
                  }}
                >
                  Hi you can checkout the menu and before coming to our
                  restaurant you can choose your table and book by clicking on
                  Book a table button ! Enjoy your meals. We are having 30% off
                  on all the items you purchase.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => history.push("/bookingPage")}
                    className="btn-round"
                    color="primary"
                    type="button"
                  >
                    Book a Table
                  </Button>

                  <Button className="btn-round" color="info" type="button">
                    Check Demo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="col-12" style={{ backgroundColor: "#ffffff" }}>
                <p
                  style={{
                    fontSize: "1.5em",
                    marginTop: "7em",
                    fontWeight: "500",
                  }}
                >
                  Enjoy Your Healthy Delicious Food
                </p>
                <p
                  style={{
                    fontSize: "1em",
                    fontWeight: "450",
                  }}
                >
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                  eveniet. Eum quas beatae cumque eum quaerat.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => history.push("/bookingPage")}
                    className="btn-round"
                    color="primary"
                    type="button"
                  >
                    Book a Table
                  </Button>

                  <Button className="btn-round" color="info" type="button">
                    Check Demo
                  </Button>
                </div>
              </div>
            )}

            {windowSize.innerWidth > 550 ? (
              <div className="col-6" style={{ padding: "0px" }}>
                <img src={kdm} style={{ width: "100%", height: "30em" }}></img>
              </div>
            ) : (
              <div className="col-12" style={{ padding: "0px" }}>
                <img src={kdm} style={{ width: "100%", height: "30em" }}></img>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingDetails;
