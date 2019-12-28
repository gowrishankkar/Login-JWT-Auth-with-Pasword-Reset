import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Jumbotron
} from "reactstrap";
import axios from "axios";

const btnstyle = {
  margin: "1em"
};

class Register extends Component {
  state = {
    Username: "",
    Phone: "",
    Password: ""
  };

  nameChange = event => {
    this.setState({
      Username: event.target.value
    });
  };

  phoneChange = event => {
    this.setState({
      Phone: event.target.value
    });
  };

  passChange = event => {
    this.setState({
      Password: event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    // console.log(this.state.Password);

    axios
      .post("http://localhost:5000/user", this.state)
      .then(res => alert("Registration Successfull"))
      .catch(err => alert(err.response.data.message));
  };

  render() {
    return (
      <Jumbotron>
        <Container>
          <h3>Register Here</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="name"
                name="name"
                id="name"
                maxLength="20"
                onChange={this.nameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="Phone"
                id="Phone"
                pattern="[0-9]*"
                maxLength="10"
                onChange={this.phoneChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={this.passChange}
              />
              <p>
                Must contain at least one number and one uppercase and lowercase
                letter & min 8 Chars
              </p>
            </FormGroup>
            <Button style={btnstyle}>Submit</Button>
          </Form>
          <Link to="/">
            <Button outline color="primary" style={btnstyle}>
              {" "}
              Login Here
            </Button>
          </Link>
        </Container>
      </Jumbotron>
    );
  }
}

export default Register;
