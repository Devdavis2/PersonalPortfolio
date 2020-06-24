import React from 'react'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import Row from 'react-materialize/lib/Row';
import Col from 'react-materialize/lib/Col';
// import { Row, Col } from 'react-materialize';

class Footer extends React.Component {
    render () {
      return (
        <footer class="page-footer white lighten-3 white-text">
          {/* <p>© 2020 Davis Creative Solutions</p> */}
  
          
          <div class=" black footer-copyright">
            <div class="container Footer-copy">
            © 2020 Dev Davis Creative Solutions
            <a class=" grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>
      );
    }
  }
  
  export default Footer;