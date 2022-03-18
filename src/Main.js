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
          hornsShown={this.props.hornsShown}
        />
      </Col>
    ));

    let hornFiltrationArray = hornedBeastArray.filter(beast => (beast.horn === this.props.hornsShown));

    console.log("horn",hornFiltrationArray);
    // handleBeastClick = () => {
    //   this.handleHearts();
    //   this.props.handleSelectedBeast(this.props.beast);
    // };


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
