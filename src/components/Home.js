import React from 'react'
import { Row, Col } from 'react-materialize';

class Home extends React.Component {
    render () {
      return (
        <div className="graphic grey lighten-2">
        <br></br>
        {/* <h1 className="container">Devin Davis</h1> */}
        <br></br>
        <Col s={12}>
        <h2 className="intro container white-text"><b>HEY THERE, <br></br>I AM DEVIN DAVIS</b></h2>
        <h5 className="blue darken-1  white-text">Product Manager | Software Engineer</h5>
        </Col>
            </div>
      );
    }
  }
  
  export default Home;