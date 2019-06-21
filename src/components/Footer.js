import React from 'react'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import Row from 'react-materialize/lib/Row';
// import { Row, Col } from 'react-materialize';

class Footer extends React.Component {
    render () {
      return (
        <footer class="page-footer grey lighten-3 black-text">
          <div class="container">
            <div class="row">
              <div class="col l6 s6">
                <h5 class="blue-text">Follow</h5>
                {/* <p class="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
                <ul>
             <Row>
                  <li><a target="_blank" class="black-text text-lighten-3" href="http://twitter.com/@Dev_Dav_S"> <img src={twitter}/></a></li>
                 
                  <li><a target="_blank" class="black-text text-lighten-3" href="http://instagram.com/king_dev_dav_s"> <img src={instagram}/> </a></li>
                  </Row>
                </ul>
              </div>
              <div class="col l4 offset-l2 s6">
                <h5 className="blue-text">Partner</h5>
                <ul>
                  <li><a class="blue-text" href="/Resume">Resume</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class=" blue darken-4 footer-copyright">
            <div class="container">
            © 2019 Copyright Davis App Solutions
            <a class=" grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>
      );
    }
  }
  
  export default Footer;