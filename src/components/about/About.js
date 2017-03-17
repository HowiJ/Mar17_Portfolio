import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Projects = () => {
  return (
    <div className="About flat-page">
      <Container>
        <Row>
          <Col md={12}>About Me</Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            If you have not seen my name typed in big font to the top left, I'm Howard, if you have, well I'm still Howard.
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            I'm a Web Developer skilled in <strong className="colorful">full stack</strong> technologies meaning I can do both <strong className="colorful">front-end</strong> and/or <strong className="colorful">back-end</strong>. Cool right? I specialize in technologies in the <strong className="colorful">MEAN</strong> (meaning <strong className="colorful">MongoDB</strong>, <strong className="colorful">ExpressJS</strong>, <strong className="colorful">AngularJS</strong>, <strong className="colorful">NodeJS</strong>) but I am capable of much more than just the MEAN stack. On the front end, I also know how to use <strong className="colorful">React</strong> (example is this website and also the 'Demos Website' project in the project section), on the back-end, I also know <strong className="colorful">PHP</strong> (with or without the CodeIgniter framework) and also <strong className="colorful">MySQL</strong> as a database (and a bit of Postgres).
            If you're interested in reaching out to me, you can find my <a href="linkedin.com/in/howijiang" target="__BLANK">LinkedIn here</a> or my <a href="github.com/howiJ">Github page here</a>.
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            <i>Stay tuned as this website is still being finished.</i>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            It's been a pleasure, 
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            ~ Howard Jiang
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;