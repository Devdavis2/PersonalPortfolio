import React from 'react'

class Footer extends React.Component {
    render () {
      return (
        <footer class="page-footer grey lighten-3 black-text">
          <div class="container">
            <div class="row">
              <div class="col l6 s6">
                <h5 class="blue-text">Follow Me</h5>
                {/* <p class="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
                <ul>
                  <li><a class="black-text text-lighten-3" href="http://twitter.com">Twitter</a></li>
                  <li><a class="black-text text-lighten-3" href="http://instagram.com">Instagram</a></li>
                </ul>
              </div>
              <div class="col l4 offset-l2 s6">
                <h5 class="blue-text">Experience</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="/Resume">Resume</a></li>
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