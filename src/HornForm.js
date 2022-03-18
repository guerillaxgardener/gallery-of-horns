import React from 'react';
import { Form } from 'react-bootstrap';
import './HornForm.css';


class HornForm extends React.Component {




  // form selection to pass value of horns up to change state on app JS which will then... filter horned beast?
  handleHornSelection = e => {
    const userHornSelection =parseInt(e.target.value);
    this.props.handleHornFilter(userHornSelection);
    console.log(typeof userHornSelection);
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <Form onChange={this.handleHornSelection}>
        <Form.Group controlId='dropdown' className="mb-3">
          <Form.Label> 🎷 Filter by horns 🎷</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value='0'>all horns</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">100 hornz</option>
          </Form.Select>
        </Form.Group>
      </Form>
    )
  }
}

export default HornForm;