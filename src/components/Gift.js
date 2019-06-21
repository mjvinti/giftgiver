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
        </Form>
      </div>
    );
  }
}

export default Gift;