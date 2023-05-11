/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import cvid from "../../assets/video/video.mp4";
import imageCh from "../../assets/customImg/Chandaka.jpg";
function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter"
        style={{ background: "rgba(44,44,44,0.2)" }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/customImg/kdm.jpg") + ")",
            marginLeft: "50%",
          }}
          ref={pageHeader}
        ></div>

        {/* <video
          className="page-header-image"
          src={cvid}
          ref={pageHeader}
          autoPlay
          muted
          loop
        ></video> */}
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img> */}
            <h3 className="">Enjoy your healthy delicious food</h3>
            <div
              style={{
                backgroundColor: "#7e131f",
                color: "white",
                Cursor: "pointer",
                height: "2em",
                borderRadius: "5px",
                width: "30%",
                height: "3em",
              }}
            >
              Book a table
            </div>
            {/* <h3>A beautiful City with oppertunities</h3> */}
          </div>
          <h6 className="category category-absolute">
            {/* Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a> */}
            Coded by Tusar
            {/* <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a> */}
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
