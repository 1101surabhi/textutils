import React, { useState } from "react";

const About = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#985555" : "white",
    border: props.mode === "dark" ? "1.5px solid white" : "",
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#181e41" : "white",
        }}
      >
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item"
            style={myStyle}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Free To Use
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Our text analysis website offers a free and accessible platform
                for anyone looking to analyze text. Whether you're a student,
                professional, or simply curious, there are no hidden costs or
                subscription fees. Enjoy the convenience of unlimited access
                without constraints.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={myStyle}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Analyze The Text
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Delve into the intricacies of your text effortlessly. With just
                a few clicks, you can transform your text to uppercase or
                lowercase, gaining valuable insights along the way. Our
                intuitive interface makes it easy to explore different analysis
                options, empowering you to understand and manipulate your text
                with precision.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={myStyle}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Access our text analysis website seamlessly across various
                browsers. Whether you prefer Chrome, Firefox, Safari, or any
                other popular browser, our platform is optimized for
                compatibility. Enjoy the same user-friendly experience and
                powerful analysis tools regardless of your browser choice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
