import React from "react";
import RecommendationPDF from "./images/Recommendation.pdf";

class Recommendation extends React.Component {
  render() {
    return (
      <div className="Recommendation">
        <object
          data={RecommendationPDF}
          type="applications/pdf"
          width="100%"
          height="100vh"
        >
          <iframe
            src={RecommendationPDF}
            width="100%"
            style={{ height: "100vh" }}
          ></iframe>
        </object>
      </div>
    );
  }
}

export default Recommendation;
