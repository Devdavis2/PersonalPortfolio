import React from 'react'
import { Row, Col } from 'react-materialize';

class Contact extends React.Component {
    render () {
      return (
        <div className="">
        <div className="container">
        <h2>Contact</h2>
        <p> If you're interested in learning more, let's connect </p>
            <div>
                <Row >
                    <Col m={4}>
               <a href="http://dev.davis2@gmail.com">Email</a>
               </Col>
               <Col m={4}>
               <a href="http://Linkedin.com/in/Dev-Davis2">LinkedIn</a>
               </Col>
               <Col m={4}>
               <a href="http://Github.com/DevDavis2">Github</a>
               </Col>
               </Row>
               <p> &copy; 2019 Devin Davis</p>
            </div>
            </div>
            </div>
      );
    }
  }
  
  export default Contact;