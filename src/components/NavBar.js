import React from 'react'
import { Sidenav } from "react-router-dom";
// import $ from 'jquery';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import DevDavisLogo from './images/DevDavisLogo.png'
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class NavBar extends React.Component {
 componentDidMount() {
  //  
  //  Add in const M =window.M;
   const M =window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // Change options to an open object
    var instances = M.Sidenav.init(elems, {});
  });
 }
 

 
    render () {
      return (
      <div>
        <nav className="black lime-text !important">
          <div className="nav-wrapper">
          <a href="#" className="sidenav-trigger" data-target="slide-out"> 
          <i className="material-icons">menu</i></a>
          <a className="brand-logo center" href="#" ><img className="menulogo" src={DevDavisLogo}/></a>
          {/* Make sure to keep nav-mobile in top nav*/}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          
              <li><a className="homebtn" href="/">Home</a></li>
              <li><a className="resumebtn" href="/Resume">Resume</a></li>
              <li><a className="contactbtn" href="mailto:dev.davis2@gmail.com">Contact</a></li>
              
      </ul>
    </div>
    </nav>

<ul id="slide-out" className="sidenav white-text !important blue mobile-menu">
<li><a href="/">Home</a></li>
<li><a href="/Resume">Resume</a></li>
<li><a href="mailto:dev.davis2@gmail.com">Contact</a></li>
</ul>
</div> 
      );
    
    }
  }
  
  export default NavBar;