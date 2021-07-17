import React from "react";
import "./Hero.css";
import Product1 from "../assets/cs-sm-600.jpg";
import Product2 from "../assets/images.jpg";
import Product3 from "../assets/IMHX2019_BoxPicking-Osaro-1170x877.jpg";
import Product4 from "../assets/MMCI-robotics-1120product.jpg";
import Product0 from "../assets/talking.jpg";
import Robot from "../assets/robot.png";
import Human from "../assets/human.png";
const HeroSection = () => {
  return (
    <div>
      <div className="heroSection">
        <div className="animate-slideup">
          <h1 style={{ padding: "20px", fontSize: "60px" }}>WE MAKE ROBOTS</h1>
          <p style={{ padding: "20px" }}>
            We create technology that enables people to perform tasks that they
            could not otherwise do, in places they could not otherwise go.
            OnSpec Robotics enable access to areas that are too dangerous or
            remote for direct human intervention, providing time and cost
            efficient operations.
          </p>
        </div>

        <div className="animate-slideup2">
          <img width="150px" height="150px" src={Human} alt="humanFace" />{" "}
          <h1 style={{ marginTop: "30px" }}>......VS......</h1>
          <img width="150px" height="150px" src={Robot} alt="robotFace" />
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#63666a", width: "1500px" }}>
          Welcome to a world of modular robotics designed for your remote
          industrial application
        </h1>
        <div
          style={{
            display: "flex",
            margin: "40px",
            justifyContent: "space-between",
            color: "#0d6efd",
          }}
        >
          <i className="fas  fa-robot fa-10x "></i>
          <i className="fas fa-industry fa-10x "></i>
          <i className="fas fa-desktop fa-10x "></i>
          <i className="fas fa-tractor fa-10x "></i>
        </div>
      </div>
      <div className="products">
        <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
          Products
        </h1>

        <div className="wrapper">
          <div className="item">
            <img
              className="item"
              height="240px"
              width="250px"
              src={Product0}
              alt="Product1"
            />
            <h3>Talking Robot</h3>
          </div>
          <div className="item">
            <img
              className="item"
              height="240px"
              width="250px"
              src={Product1}
              alt="Product1"
            />
            <h3>Cable Saver</h3>
          </div>
          <div className="item">
            <img
              className="item"
              height="240px"
              width="250px"
              src={Product2}
              alt="Product2"
            />
            <h3>Sustainable Manufacturing</h3>
          </div>
          <div className="item">
            <img
              className="item"
              height="240px"
              width="250px"
              src={Product3}
              alt="Product3"
            />
            <h3>Material Handling Product</h3>
          </div>
          <div className="item">
            <img
              className="item"
              height="240px"
              width="250px"
              src={Product4}
              alt="Product4"
            />
            <h3>Material Handling Product</h3>
          </div>

          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
