import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Parallax from './components/parallax/Parallax';
import Navbar from './components/navbar/Navbar'; 
import Home from './components/home/Home'; 
import About from './components/about/About'; 
import Projects from './components/projects/Projects'; 
import Contact from './components/contact/Contact'; 
import './assets/css/animate.css';

import './App.css';
class App extends Component {
  constructor (props) {
    super(props);

    this.state = { scrolling: true, rgb: 0, active: '' };
  }
  componentDidMount () {
    document.addEventListener('scroll', () => { this.handleScroll() });
    const navCol = document.getElementsByClassName('navbarPlace')[0];
    const navbar = document.getElementsByClassName('Navbar')[0];

    navCol.style.height = navbar.clientHeight+'px';
  }
  handleScroll () {
    const about = document.getElementsByClassName('About')[0];
    const projects = document.getElementsByClassName('Projects')[0];
    // const contact = document.getElementsByClassName('Contact')[0];
    const homeHeight = document.getElementsByClassName('Home')[0].clientHeight;
    const navbar     = document.getElementsByClassName('Navbar')[0];

    //window.scrollY >= contact.offsetTop+homeHeight
    if (window.scrollY >= projects.offsetTop+homeHeight+200+projects.clientHeight) {
      this.setState({ active: 'contact' });
    } else if (window.scrollY >= projects.offsetTop+homeHeight) {
      this.setState({ active: 'projects' });
    } else if (window.scrollY >= about.offsetTop+homeHeight) {
      this.setState({ active: 'about' });
    } else {
      this.setState({ active: '' });
    }


    if (window.scrollY > homeHeight) {
      navbar.style.position = 'fixed';
      navbar.style.color = this.state.color
    } else {
      navbar.style.position = 'static'
      const color = 255-(255*window.scrollY/homeHeight);

      this.setState({ rgb: color }, () => {
        const col = this.state.rgb.toString(16).substr(0,2);
        navbar.style.color = `#${col}${col}${col}`;
      })

    }
  }
  render() {
    return (
      <div className="App">
        <Row>
          <Col md={ 12 } className="homeContainer">
            <Home 
              scrolling={this.state.scrolling} 
              toggleScrolling={(bool, callback) => { this.setState({ scrolling: bool }, callback) }}/>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="navbarPlace">
            <Navbar scrolling={this.state.scrolling} active={this.state.active}></Navbar>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <About />
            <Parallax img='para3' height="400"/>
            <Projects />
            <Parallax img='para2'height="400" />
            <Contact />
            <Parallax img='para1' height="800"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
