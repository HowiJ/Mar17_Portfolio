import React from 'react';
// import { Container, Row, Col,  } from 'reactstrap';
import FontAwesome from 'react-fontawesome';


const Home = (props) => {
  function scrollDown() {
    props.toggleScrolling(true, () => {
      const home = document.getElementsByClassName('Home')[0];

      const distance = home.clientHeight-window.scrollY;
      const ticksPerMSecond  = 1000/60;
      const ticks = 700/ticksPerMSecond;
      const distancePerTick = distance/ticks;
      let x = 2;
      const interval = setInterval(() => {
        if (home.clientHeight <= window.scrollY) {
          clearInterval(interval);
          return;
        }
        if (window.scrollY + distancePerTick + x > home.clientHeight) {
          window.scrollTo(0, home.clientHeight);
        } else {
          const scroll = window.scrollY+distancePerTick+x;
          x += 1;
          window.scrollTo(0, scroll);
        }
      }, ticksPerMSecond)
    })
  }

  return (
    <div className="Home home-page" onClick={ () => { scrollDown(); } } >
      <div className="title">
        {/*<p>Enter</p>*/}
      </div>

      <div className="enter">
        <FontAwesome 
          onClick={ () => { scrollDown(); } }
          className="scrollDown animated infinite bounce"
          name="angle-down"
          size="2x"/>
      </div>
    </div>
  );
}

export default Home;