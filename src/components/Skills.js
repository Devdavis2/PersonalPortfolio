import React from "react";
import data from "./images/data.png";
import strategy from "./images/strategy.png";
import app from "./images/app.png";
import PM_Rocket from "./images/PM_Rocket.png";
import { Row, Col } from "react-materialize";

class Skills extends React.Component {
  render() {
    return (
      <div className=" section white">
        <div className="container">
          <h4 className="Skills black-text">Skills</h4>
          <br />
          <div>
            <Row>
              <Col className="grey lighten-3" s={12} m={3}>
                <h5 className="Strategy-headline">Strategy</h5>
                <img className="strategy" src={strategy} />
                <p className="strategic_content">
                  Data-charged, creative thinker with an ROI-driven process and
                  proficient problem-solving skills.
                </p>
              </Col>
              <Col className="grey lighten-3" s={12} m={3}>
                <h5 className="Analytics-headline">Analytics</h5>
                <img className="data" src={data} />
                <p className="data_content black-text">
                  Detail-oriented decision-maker inspiring analytical roadmaps
                  with sound business judgment.
                </p>
              </Col>
              <Col className=" grey lighten-3" s={12} m={3}>
                <h5 className="Developer-headline">Development</h5>
                <img className="app" src={app} />
                <p className="dev_content">
                  Full-stack developer proficient in programming languages
                  inclusive of React.js and AWS Amplify.
                </p>
              </Col>
              <Col className=" grey lighten-3" s={12} m={3}>
                <h5 className="PM-headline">PM</h5>
                <img className="PM-rocket" src={PM_Rocket} />
                <p className="PM_content">
                  PM generating 6+ digit revenues, commmunicating project
                  requirements to non-technical stakeholders.
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Skills;
