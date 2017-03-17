import React from 'react';
import { Row, Col } from 'reactstrap';
import Img from '../../../../assets/img/imgLoader';

const Project = ({data}) => {
  const style = {
    'background': `url(${Img[data.imgs[0]]})`,
    'backgroundSize': 'cover',
    'backgroundPositionX': 'center',
    'height': 'calc(30vh)',
    'textAlign': 'center',
    'verticalAlign': 'middle'
  }
  const pStyle = {
    'fontSize': '2em',
    'height': '100%',
    'width': '100%',
    'top': 'calc(50%)',
    'left': '0',
    'position': 'absolute'
  }
  return (
    <Col md={4} sm={12}>
      <a href={data.url} target="_BLANK">
        <div className="Project projectCard">
          <Row>
            <Col md={12} className="projCard" style={ style }>
              <p style={ pStyle }>
                {data.name}
              </p>
            </Col>
          </Row>
        </div>
      </a>
    </Col>
  );
}

export default Project;