import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  FormControl, 
  FormLabel, 
  Button 
} from 'react-bootstrap';

class Gift extends Component {
  constructor() {
    super();
    this.state = { person: '', present: '' };
  }
  
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className='input-person'
              onChange={e => this.setState({ person: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Present</Form.Label>
            <Form.Control
              className='input-present'
              onChange={e => this.setState({ present: e.target.value })}
            />
          </Form.Group>
        </Form>
        <Button 
          className='btn-remove'
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;