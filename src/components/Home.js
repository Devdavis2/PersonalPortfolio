import React from 'react'
import { Row, Col } from 'react-materialize';

class Home extends React.Component {
    render () {
      return (
        <div className="graphic grey lighten-2">
        <br></br>
        {/* <h1 className="container">Devin Davis</h1> */}
        <br></br>
        {/* <Col s={10}> */}
        <h4 className="intro container white-text"><b>CREATIVE</b></h4>
        <h4 className="title container white-text"><b>TECHNOLOGIST</b></h4>
        <h5 className="sub_intro blue flow-text white-text">Product Manager | Software Engineer</h5>
        {/* </Col> */}
            </div>
      );
    }
  }
  
  export default Home;