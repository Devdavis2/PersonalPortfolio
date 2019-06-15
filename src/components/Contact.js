import React from 'react'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import gmail from './images/gmail.png'
import { Row, Col } from 'react-materialize';

class Contact extends React.Component {
    render () {
      return (
        <div className="">
        <div className="container">
        <h4 className="blue-text">Contact</h4>
        <p> If you're interested in connecting, reach out via email, LinkedIn, or follow me on Instagram. Visit Github to learn more about my apps.</p>
            <div>
                <Row >
                    <Col s={4} m={4}>
               <a target="_blank" href="http://dev.davis2@gmail.com">
               <img src={gmail}/>
               </a>
               </Col>
               <Col s={4} m={4}>
               <a target="_blank" href="http://Linkedin.com/in/Dev-Davis2">
               <img src={linkedin}/> 
               </a>
               </Col>
               <Col s={4} m={4}>
               <a target="_blank" href="http://Github.com/DevDavis2"> 
               <img src={github}/>
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