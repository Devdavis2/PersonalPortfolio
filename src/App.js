import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css'; // Must use lines 3 & 4 to import materialize along with npm installs
import 'materialize-css/dist/css/materialize.min.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio.js'
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'
// import { Row, Col } from 'react-materialize';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
// import Switch from 'react-materialize/lib/Switch';


class App extends React.Component {
  render () {
    return (
      <Router>
      <div className="App">
      <NavBar/>
      <div className="">
      
  

    
      {/* <Route path="/About" exact component={About}></Route> */}
      
      <Switch>
      <Route path="/Resume" exact component={Resume}/>
      </Switch>

      
      <Route>
      <Home/>
      <About />
      
      <Portfolio path="/Portfolio" exact component={Portfolio}/>
      
      <Contact path="/Contact" component={Contact} />
      </Route>
     <Footer/>


      </div>
          </div>
          </Router>
    );
  }
}

export default App;


