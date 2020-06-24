import React from 'react'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import gmail from './images/gmail.png'
import instagram from './images/instagram.png'
import { Row, Col } from 'react-materialize';

class Contact extends React.Component {
    render () {
      return (
        <div className="">
        <div className="container">
        <h4 className="Contact black-text">Contact</h4>
        <p className="contact_content container"> If you’re interested in connecting IRL, let’s connect! 
        I can be reached via email, LinkedIn, or Instagram. 
        To learn more about my progressive web apps, visit GitHub to get started. </p>
        <br/>
        <br/>
            <div>
                <Row >
                    <Col s={3} m={3}>
               <a target="_blank" href="mailto:dev.davis2@gmail.com">
               <img className="gmail" src={gmail}/>
               </a>
               </Col>
               <Col s={3} m={3}>
               <a target="_blank" href="http://Linkedin.com/in/Dev-Davis2">
               <img className="linkedin" src={linkedin}/> 
               </a>
               </Col>
               <Col s={3} m={3}>
               <a target="_blank" href="http://instagram.com/king_dev_dav_s"> 
               <img className="instagram" src={instagram}/>
               </a>
               </Col>
               <Col s={3} m={3}>
               <a target="_blank" href="http://Github.com/DevDavis2"> 
               <img className="github" src={github}/>
               </a>
               </Col>


               </Row>
               
            </div>
            </div>
            </div>
      );
    }
  }
  
  export default Contact;