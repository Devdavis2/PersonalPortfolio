import React from 'react'
import linkedin from './images/linkedin.png'
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
                    <Col s={4} m={4}>
             <p>Agile</p>
               <img src={gmail}/>
            
               </Col>
               <Col s={4} m={4}>
               <p>Agile</p>
               <img src={linkedin}/> 
        
               </Col>
               <Col s={4} m={4}>
               <p>Agile</p>
               <img src={github}/>
           
               </Col>
               </Row>
               
            </div>
            </div>
            </div>
      );
    }
  }
  
  export default Skills;