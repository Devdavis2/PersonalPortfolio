import React from "react";
import { Row, Col } from "react-materialize";

class About extends React.Component {
  render() {
    return (
      <div className="about section black darken-3">
        <h4 className="Abouttitle container white-text">About</h4>

        <img className="section profile" src="https://imgur.com/oFNYCrL.jpg" />

        <Row>
          <Col s={12} m={6}>
            <h4 className="Subheadline blue-text">
              Dev Davis is about solutions.
            </h4>
            <br />
            <p className="container Aboutcopy white-text">
              Throughout my 13+ years of entrepreneurial project management,
              I’ve learned many things with one staying top of mind — if you
              want to successfully support infrastructure platforms, cloud
              systems, and progressive tech solutions, the procurement of
              diverse experiences is a must-have tool in MarTech.
              <br />
              <br />
              As a proactive professional, my expertise as a diplomatic
              innovator has remained a constant across fast-paced multinational
              environments. Along the way I’ve earned a track record for
              performing analytical research, executing $1M project budgets, as
              well as managing and developing sales team members. Countless
              C-suite execs have noted that my excellent verbal, written and
              interpersonal communication skills have substantially improved the
              connection between their marketing and tech strategies. However,
              my aptitude for communicating complex priorities to non-technical
              stakeholders is just as noteworthy, if not my strongest asset. I’m
              a diligent project manager who works well autonomously, as well as
              part of a greater team— all in order to deliver world-class tech
              solutions.
            </p>
            <br />
            <p className="container passions white-text">
              <b>I possess a passion for the following:</b>
            </p>
            <ul className="passionslist">
              <li className="white-text">Emerging Technology</li>
              <li className="white-text">Software Engineering</li>
              <li className="white-text">Audio Engineering</li>
              <li className="white-text">Mentorship</li>
            </ul>
          </Col>

          <Col s={12} m={6}>
            <img
              className="section demo responsive-img"
              src="https://imgur.com/C8CamYI.jpg"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
