import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "materialize-css"; // Must use lines 3 & 4 to import materialize along with npm installs
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/Home";
import Video from "./components/Video";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio.js";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import { Row, Col } from 'react-materialize';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Switch from "react-materialize/lib/Switch";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/Resume" component={Resume} />
          </Switch>
          <Switch>
            <Route path="/Home" component={Home} />
            <Home />
          </Switch>
          <Video />
          <About />
          <Skills />
          <Portfolio />
          <Contact path="/Contact" component={Contact} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
