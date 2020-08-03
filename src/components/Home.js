import React from "react";
import { Row, Col } from "react-materialize";
import data from "./images/data.png";
import strategy from "./images/strategy.png";
import app from "./images/app.png";
import PM_Rocket from "./images/PM_Rocket.png";
import { Carousel } from "react-materialize";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import gmail from "./images/gmail.png";
import instagram from "./images/instagram.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Header Intro Section */}

        <div className="graphic black">
          <br></br>

          <br></br>

          <h4 className="intro container white-text">
            <b>MarTech</b>
          </h4>
          <h6 className="title flow-text container white-text">
            <b>Management Specialist</b>
          </h6>
        </div>
      </div>
    );
  }
}

export default Home;
