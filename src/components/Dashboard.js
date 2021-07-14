import React, { useState } from "react";
import "./Dashboard.css";
import Product0 from "../assets/talking.jpg";
const Dashboard = (props) => {
  const [Active, setActive] = useState(0);
  return (
    <div className="grid-container">
      <div className="menu">
        <ul>
          {props.list.map((p, index) => {
            return (
              <li
                key={p.name}
                style={
                  index === Active ? { color: "blue" } : { color: "black" }
                }
                onClick={() => setActive(index)}
              >
                {" "}
                {p.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="photo">
        <img
          width="350px"
          height="400px"
          src={props.list[Active].img}
          alt="talking robot"
        />
      </div>
      <div className="right">{props.list[Active].desc}</div>
    </div>
  );
};

export default Dashboard;
