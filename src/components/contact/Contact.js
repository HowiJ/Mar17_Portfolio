import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Contact = () => {
  return (
    <div className="Contact flat-page">
      <Container>
        <Row>
          <Col md={4} className="contactStubs animated swing infinite">
            <a href="linkedin.com/in/howijiang" target="__BLANK">
              <FontAwesome
                name="linkedin-square"
                size="5x">
              </FontAwesome>
            </a>
          </Col>
          <Col md={4} className="contactStubs animated swing infinite">
            <a href="https://github.com/howiJ">
              <FontAwesome
                name="github-square"
                size="5x">
              </FontAwesome>
            </a>
          </Col>
          <Col md={4} className="contactStubs animated swing infinite">
            <a href="mailto:me@howardjiang.com?Subject=Hello%20again">
              <FontAwesome
                name="envelope"
                size="5x">
              </FontAwesome>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="contactStubs">
            <a href="linkedin.com/in/howijiang" target="__BLANK">
              linkedin.com/in/howijiang
            </a>
          </Col>
          <Col md={4} className="contactStubs">
            <a href="https://github.com/howiJ">
              https://github.com/howiJ
            </a>
          </Col>
          <Col md={4} className="contactStubs">
            <a href="mailto:me@howardjiang.com?Subject=Hello%20again">
              me@howardjiang.com
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;