import React from 'react'
import data from './images/data.png'
import github from './images/github.png'
import gmail from './images/gmail.png'
import { Row, Col } from 'react-materialize';

class Skills extends React.Component {
    render () {
      return (
        <div className=" section blue">
        <div className="container">
        <h4 className="white-text">Skills</h4>
            <div>
                <Row >
                    <Col className="grey lighten-3" s={4} m={4}>
                    <h5><b>Strategy</b></h5>
               <img src={data}/>
               <p>I create full-stack web applications using Javascript, HTML & CSS, React.js, Express.js, as well as Ruby on Rails.</p>
               </Col>
               <Col className="blue lighten-2" s={4} m={4}>
               <h5><b>Analytics</b></h5>
               <img src={data}/> 
               <p>I create full-stack web applications using Javascript, HTML & CSS, React.js, Express.js, as well as Ruby on Rails.</p>
               </Col>
               <Col className=" grey lighten-3" s={4} m={4}>
               <h5 className="web_app"><b>Web Apps</b></h5>
               <img src={data}/>
               <p>I create full-stack web applications using Javascript, HTML & CSS, React.js, Express.js, as well as Ruby on Rails.</p>
               </Col>
               </Row>
               
            </div>
            </div>
            </div>
      );
    }
  }
  
  export default Skills;