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

export default class ForgotPassword extends Component {
  state = {
    Username: "",
    Phone: ""
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

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    axios
      .post("http://localhost:5000/resetauth", this.state)

      .then(res => {
        alert("Username & Phone Number Verified");
        // console.log(res);
        const newPwd = prompt(
          "New Password \nMust contain at least one number and one uppercase and lowercase letter & min 8 Chars"
        );
        let Pobj = this.state;
        Pobj.newPassword = newPwd;
        // console.log(Pobj);
        // console.log(newPwd);
        axios.post("http://localhost:5000/reset/", Pobj).then(res => {
          // console.log(res.data);
          alert("Password Has Been Reset changed");
        });
      })
      .catch(err => {
        alert(err.response.data.message);
        // console.log(err.response);
      });
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h3>Forgot Password</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.nameChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  type="number"
                  name="Phone"
                  id="Phone"
                  onChange={this.phoneChange}
                />
              </FormGroup>

              <Button style={btnstyle}>Reset Password</Button>
            </Form>
            <Link to="/">
              <Button outline color="primary" style={btnstyle}>
                {" "}
                Bact to Login
              </Button>
            </Link>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
