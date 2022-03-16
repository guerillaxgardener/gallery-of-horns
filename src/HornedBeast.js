import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
    }
  }

  handlehearts = () => {
    this.setState({
      hearts: this.state.hearts + 1
    });
  };

  render() {
    // console.log(this.props)
    // console.log(this.state);
    return (
      <article>
        <h3>{this.props.title}</h3>

        <img
          src={this.props.image_url}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.handlehearts}
        />

        <p>{this.props.description}</p>

        <Button
          className="article-button"
          onClick={this.handlehearts}
        >
          Give 💓💓💓's
        </Button>

        <p>You've given {this.state.hearts} 💓💓💓's</p>
      </article>
    );
  }
}

export default HornedBeast;