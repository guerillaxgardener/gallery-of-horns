import React from "react";
import { Col, Card, Button } from 'react-bootstrap';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
    }
  }

  handleHearts = () => this.setState({ hearts: this.state.hearts + 1 });

  handleBeastClick = () => {
    this.handleHearts();
    this.props.handleSelectedBeast(this.props.beast);
  };


  render() {
    // console.log(this.props)
    // console.log(this.state);
    return (
      <Col>
        <Card className="beastCards h-100" style={{ width: '18rem' }}>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Img
            src={this.props.beast.image_url}
            onClick={this.handleBeastClick}
            alt={this.props.beast.description}
          />
          <Card.Body>
            <Card.Subtitle> You've given {this.state.hearts} 💓💓💓's </Card.Subtitle>
            <Button className="article-button" onClick={this.handleBeastClick}>
              Give 💓💓💓's
            </Button>
            <Card.Text> {this.props.beast.description} </Card.Text>
          </Card.Body>
        </Card>
      </Col >
    );
  }
}

export default HornedBeast;