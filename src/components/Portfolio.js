import React from "react";
import { Carousel } from "react-materialize";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="black darken-3">
        <div className="container">
          <h4 className="portfolio white-text">Portfolio</h4>
          <p className="portfolio-copy white-text">
            {" "}
            Swipe left to see project integrations that I’ve successfully
            executed as a MarTech project manager.{" "}
          </p>

          <Carousel
            className="Carousel"
            options={{ fullWidth: true, fullHeight: true, indicators: true }}
          >
            <div className="red darken-3">
              <a target="_blank" href="#">
                <h3 className="BofA btn red darken-2 white-text">
                  Bank of America
                </h3>
              </a>
              <p className="container BofA-copy white-text">
                Chicago Marathon distance calculator application
              </p>
              <br></br>
              <img src="https://imgur.com/nOfziuK.png" />
            </div>

            <div className="orange darken-3">
              <a target="_blank" href="https://tonus-moods-eq.herokuapp.com/">
                <h3 className="Pro_Events btn orange darken-2 white-text">
                  The Home Depot
                </h3>
              </a>
              <p className="container Pro_Events_copy white-text">
                Pro Events guest check-In application
              </p>
              <br></br>
              <img src="https://imgur.com/ecCqzpH.png" />
            </div>

            <div className="orange darken-3">
              <a target="_blank" href="https://tonus-moods-eq.herokuapp.com/">
                <h3 className="CGD btn orange darken-2 white-text">
                  The Home Depot
                </h3>
              </a>
              <p className="container CGD_copy white-text">
                College Gameday Cornhole Tournament registration microsite{" "}
              </p>
              <br></br>
              <img src="https://imgur.com/MP0I4gD.png" />
            </div>

            <div className="blue darken-4">
              <a target="_blank" href="https://jobshunter.herokuapp.com/">
                <h3 className="Novartis btn blue darken-4 white-text">
                  Novartis
                </h3>
              </a>
              <p className="container Novartis_copy white-text">
                Novartis Data Privacy Day Picture Mosaic
              </p>
              <br></br>
              <img src="https://imgur.com/CG8wGCF.png" />
            </div>

            <div className="blue darken-3">
              <a
                target="_blank"
                href="https://kicks-stock.herokuapp.com/kicks/user"
              >
                <h3 className="KS btn blue white-text">Kicks Stock</h3>
              </a>
              <p className="container KS_copy white-text">
                An eCommerce sneaker platform connecting buyers and sellers
              </p>
              <br></br>
              <img src="https://imgur.com/7gyDsYA.png" />
            </div>

            <div className="grey darken-4">
              <a target="_blank" href="http://tonusaudio.com/">
                <h3 className="Tonus btn grey darken-3 red white-text">
                  Tonus Audio
                </h3>
              </a>
              <p className="container Tonus_copy white-text">
                An website for a start-up consumer electronics audio brand
              </p>
              <br></br>
              <img src="https://imgur.com/XsqWpEz.png" />
            </div>
          </Carousel>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Portfolio;
