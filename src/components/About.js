import React from 'react'
import { Row, Col } from 'react-materialize';

class About extends React.Component {
    render () {
      return (
        <div className="">
        <br></br>
        <h3 className="about-title container">About Me</h3>
        <br></br>
        
        <img className="profile" src='https://imgur.com/oFNYCrL.jpg'/>
        <br></br>
        <h6 className="about container black-text">I am a Marketer-turned-Software Engineer. I combine my technical and analytical skills to spot emerging trends, drive teams toward unified goals, and embrace change with a growth mindset. I am eager to utilize all of these skills in my work in tech, harnessing my unique perspective to build exciting new projects.</h6>
      
            </div>
      );
    }
  }
  
  export default About;