import React from 'react'

class Footer extends React.Component {
    render () {
      return (
        <footer class="page-footer grey lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Resume</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Portfolio</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class=" blue darken-4 footer-copyright">
            <div class="container">
            © 2019 Copyright Davis & Allen Creative Solutions
            <a class=" grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>
      );
    }
  }
  
  export default Footer;