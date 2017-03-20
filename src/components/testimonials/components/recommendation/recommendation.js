import React from 'react';
import { Row, Col } from 'reactstrap';

const Recommendation = (props) => {
  return (
    <div className="Recommendation">
      <br/>
      <hr/>
      <Row>
        <Col md={{size: 12, offset: 0}}>
          <Row>
            <Col md={12} className="message">
              "{props.data.message}"
            </Col>
            <Col md={12} className="name">
              {props.data.name}
            </Col>
            <Col md={12} className="title">
              {props.data.title}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Recommendation;