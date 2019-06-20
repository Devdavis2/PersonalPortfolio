import React from 'react'
// import { SidNav } from "react-router-dom"

class NavBar extends React.Component {
    render () {
      return (
    
     <nav>
    <div class="nav-wrapper blue darken-4 blue-text">
      <a href="#" class="brand-logo center">Devin Davis</a>
      
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <div className="links ">
        <li><a href="/">Home</a></li>
        <li><a href="/Resume">Resume</a></li>
        {/* <li><a href="/Portfolio">Portfolio</a></li>
        <li><a href="/Contact">Contact</a></li> */}
        </div>
      </ul>
    </div>
    </nav>



        
      );
    }
  }
  
  export default NavBar;