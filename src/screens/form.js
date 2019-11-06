import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, FormGroup, Label, Input } from 'reactstrap'
import { Alert } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'


export class Form extends Component {
  state = {
    Email: '',
    Username: '',
    Message: '',
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  
  render() {
    return (
      <container>
        <Row style={{ marginTop: '40px' }}>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <form id="form">
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input 
                  type="Email" 
                  name="Email" 
                  value={this.state.Email} 
                  id="Email" 
                  placeholder="Please enter your email." 
                  required
                  onChange={e => this.change(e)}/>
                </FormGroup>
                <FormGroup>
                  <Label for="Username">Username</Label>
                  <Input 
                  type="Username" 
                  name="Username" 
                  value={this.state.Username} 
                  id="Username" 
                  placeholder="Please enter your username."
                  required
                  onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup>
                  <Label for="Message">Message</Label>
                  <Input 
                  type="textarea" 
                  name="Message" 
                  value={this.state.Message} 
                  id="Message" 
                  placeholder="Please enter your message." 
                  required
                  onChange={e => this.change(e)}/>
                </FormGroup>
                <Button color="primary" block onClick={e => this.onSubmit(e)}>Submit</Button>
              </form>
          </Col>
          <Col sm="2">
            <Alert 
            color="danger"
            name="Alert"
            >
              All fields are required.
            </Alert>
          </Col>
        </Row>
      </container>
    )
  }
}

export default Form
