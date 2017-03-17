import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    //0: Large, 1: Small
    this.state = {open: false}
  }
  componentDidMount () {
    // Component Mounted
  }
  toggle () {
    console.log(this.state.open);
    this.setState({ open : !this.state.open });
  }
  handleScroll (className) {
    if (!document.getElementsByClassName('Home')) {
      return;
    }
    let scrollTo = 0;
    if (typeof className === 'number') {
      scrollTo = 0;
    } else {
      scrollTo = document.getElementsByClassName(className)[0].offsetTop+document.getElementsByClassName('Home')[0].clientHeight;
    }

    const current = window.scrollY;
    const dpt  = (scrollTo - window.scrollY) / (500 / (1000/60));
    let x = 2;

    const maxTime = 1000;
    let currTime = 0;
    let direction = current > scrollTo?1:0;
    let currScroll = window.scrollY;

    const interval = setInterval(() => {
      if (currTime >= maxTime) {
        clearInterval(interval);
        return;
      }
      currTime++;
      if ( direction === 0 ) {
        if (window.scrollY + dpt + x > scrollTo) {
          window.scrollTo(0, scrollTo);
          clearInterval(interval);
          return;
        } else {
          const scroll = window.scrollY + dpt + x;
          x+=1;
          window.scrollTo(0, scroll);
        }
      } else {
        if ((window.scrollY + dpt) + x < scrollTo) {
          window.scrollTo(0, scrollTo);
          clearInterval(interval);
          return;
        } else {
          const scroll = (window.scrollY + dpt) + x;
        // console.log(scroll, dpt,  x);
          x-=1;
          window.scrollTo(0, scroll);
        }
      }

      if (window.scrollY === currScroll) {
        clearInterval(interval);
        return;
      }
      currScroll = window.scrollY;
    }, 1000/45)
  }
  render() {
    return (
      <div className="Navbar">
        <Container>
          <Row>
            <Col md={ 7 } sm={ 10 }>
              <h1 className="menuItem" onClick={() => { this.handleScroll(0); }}>Howard Jiang</h1>
            </Col>
            <Col md={ 5 } sm={ 2 } className="menuRowItems">
              <ul className="mdMenuItems">
                <li className={ 'menuItem '&&this.props.active==='about'?'active':'' } onClick={() => { this.handleScroll('About') } }>
                  About
                </li>
                <li className={ 'menuItem '&&this.props.active==='projects'?'active':'' } onClick={() => { this.handleScroll('Projects') } }>
                  Projects
                </li>
                <li className={ 'menuItem '&&this.props.active==='contact'?'active':'' } onClick={() => { this.handleScroll('Contact') } }>
                  Contact
                </li>
              </ul>
              <div>
                <FontAwesome 
                  name="bars" 
                  size="2x" 
                  className="menuItem dropdownMenu"
                  onClick={()=>{ this.toggle(); }}>
                </FontAwesome>
              </div>
            </Col>
          </Row>
          { this.state.open &&
            <Row className="dropdownMenuItemsRow">
              <Col md={12} sm={12}>
                <ul className="dropdownMenuItems">
                  <li className={ 'menuItem '&&this.props.active==='about'?'active':'' } onClick={() => { this.handleScroll('About') } }>
                    About
                  </li>
                  <li className={ 'menuItem '&&this.props.active==='projects'?'active':'' } onClick={() => { this.handleScroll('Projects') } }>
                    Projects
                  </li>
                  <li className={ 'menuItem '&&this.props.active==='contact'?'active':'' } onClick={() => { this.handleScroll('Contact') } }>
                    Contact
                  </li>
                </ul>
              </Col>
            </Row>
          }
        </Container>
      </div>
    )
  }
}

export default Navbar;