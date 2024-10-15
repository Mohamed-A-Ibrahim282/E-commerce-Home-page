import React, { useState } from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  let [sliderConter, setSliderConter] = useState(10);


  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
      setSliderConter(7);
    } else if (window.innerWidth <= 1000 && window.innerWidth >= 770) {
      setSliderConter(5);
    } else if (window.innerWidth <= 770 && window.innerWidth >= 500) {
      setSliderConter(4);
    } else if (this.window.innerWidth < 500) {
      setSliderConter(2);
    }
  });

  function SampleNextArrow() {
    return <div style={{ display: "none" }} />;
  }

  function SamplePrevArrow() {
    return <div style={{ display: "none" }} />;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: sliderConter,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className="container bg-main">
        <Slider className="row" {...settings}>
          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand1.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand2.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand12.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand4.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand5.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand11.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand7.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand8.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand9.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand10.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>

          <div className="rounded-2 p-3">
            <img
              src={require("../../image/brand11.png")}
              className="card-img-top rounded-2"
              alt="..."
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
