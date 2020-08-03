import React from "react";

class Video extends React.Component {
  render() {
    return (
      <div className="black iframe-container ">
        <div className="video-container">
          <br />
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YbmuMcuHg2E?start=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <br />
        </div>
        <br />
      </div>
    );
  }
}

export default Video;
