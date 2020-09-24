import React from "react";
import { Redirect } from "react-router-dom";
import ResumePDF from "./images/Resume.pdf";

class Resume extends React.Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/Resume" />;
    }
  };

  render() {
    return (
      <div className="resume">
        <object
          data={ResumePDF}
          type="applications/pdf"
          width="100%"
          height="100vh"
        >
          <iframe
            src={ResumePDF}
            width="100%"
            style={{ height: "100vh" }}
          ></iframe>
        </object>
      </div>
    );
  }
}

export default Resume;
