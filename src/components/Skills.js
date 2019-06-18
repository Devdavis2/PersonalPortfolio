import React from 'react'
import data from './images/data.png'
import strategy from './images/strategy.png'
import app from './images/app.png'
import { Row, Col } from 'react-materialize';

class Skills extends React.Component {
    render () {
      return (
        <div className=" section blue">
        <div className="container">
        <h4 className="white-text">Skills</h4>
            <div>
                <Row >
                    <Col className="grey lighten-3" s={12} m={4}>
                    <h5><b>Strategy</b></h5>
               <img src={strategy}/>
               <p>Strategic thinker in an ROI driven manner with strong problem-solving skills and a growth mindset.</p>
               </Col>
               <Col className="blue lighten-2" s={12} m={4}>
               <h5><b>Analytics</b></h5>
               <img src={data}/> 
               <p>Data-driven decision making and sound business judgment through strong analytical thinking.</p>
               </Col>
               <Col className=" grey lighten-3" s={12} m={4}>
               <h5 className="web_app"><b>Web Apps</b></h5>
               <img src={app}/>
               <p>Full-stack progressive web/mobile applications using Javascript, React.js, Express.js, MongoDB and Ruby on Rails.</p>
               </Col>
               </Row>
               
            </div>
            </div>
            </div>
      );
    }
  }
  
  export default Skills;