import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../../assets/data/testimonials.json';
import Recommendation from './components/recommendation/recommendation';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] }
  }
  componentDidMount() {
    this.setState({ data: data })
  }
  render() {
    return (
      <div className="Testimonials flat-page">
        <Container>
          <Row>
            <Col md={{size: 8, offset: 2}}>
              <h1>Personal Recommendations</h1>
            </Col>
            <Col md={12}>
              {this.state.data.map(datum => {
                return <Recommendation key={datum.name} data={datum}></Recommendation>;
              })}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Testimonials;