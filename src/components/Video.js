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
            src="https://www.youtube.com/embed/N-_vpxD4hdM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Video;
