import React from 'react';
import { Container, Row } from 'reactstrap';

import Project from './components/project/Project';
import projects from '../../data.json';

const mapped = projects.map(val => {
  return (
    <Project data={val} key={val._id} />
  )
})

const Projects = () => {
  return (
    <div className="Projects flat-page">
      <Container>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Projects;