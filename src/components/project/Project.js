import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import data from '../../data.json';

const ProjectPage = () => {
  console.log(data);
  return (
    <div className="Navbar">
      <Container>
        <Row>
          <Col md={ 4 }>
            <h1 className="menuItem">Howard Jiang</h1>
          </Col>
          <Col md={ {size: 4, offset: 4} }>
            <ul>
              <li>Back</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectPage;
