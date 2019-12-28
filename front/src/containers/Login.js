import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Jumbotron, Container } from "reactstrap";


const btnstyle = {
  margin: "1em"
};

class Login extends Component {
  state = {
    Username: "",
    Password: ""
  };

  nameChange = event => {
    this.setState({
      Username: event.target.value
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
    axios
      .post("http://localhost:5000/auth", this.state)

      .then(res => {
        alert("login successfull");
        // console.log(res);
      })
      .catch(err => {
        alert(err.response.data.message);
        // console.log(err.response.data.message);
      });
  };
  render() {
    return (
      <Jumbotron>
        <Container>
        <h3>Login Here</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="name"
                name="name"
                id="exampleEmail"
                onChange={this.nameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                onChange={this.passChange}
              />
            </FormGroup>
            <Button style={btnstyle}>Submit</Button>
          </Form>
          <br></br>
          <Link to="/register">
            <Button outline color="primary" style={btnstyle}>
              {" "}
              Register Here
            </Button>
          </Link>
          <br></br>
          <Link to="/forgot">
            <Button outline color="secondary" style={btnstyle}>
              Forgot Password
            </Button>{" "}
          </Link>
        </Container>
      </Jumbotron>
    );
  }
}

export default Login;
