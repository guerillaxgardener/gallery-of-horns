import React from 'react';
import HornedBeast from './HornedBeast';
import { Col, Row, Container } from 'react-bootstrap';
import './Main.css';

class Main extends React.Component {
  render() {
    // console.log('main props', this.props);
    let hornedBeastArray = this.props.data.map((beast, index) => (
      <Col key={index}>
        <HornedBeast
          beast={beast}
          handleSelectedBeast={this.props.handleSelectedBeast}
        />
      </Col>
    ));

    // console.log(hornedBeastArray);
    return (
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} xl={4}>
          {hornedBeastArray}
        </Row>
      </Container>
    )
  }
}

export default Main;
