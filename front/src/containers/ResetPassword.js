// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Container,
//   Jumbotron
// } from "reactstrap";
// import axios from "axios";

// export default class ResetPassword extends Component {
//   state = {
//     Username: "",
//     Phone: ""
//   };

//   nameChange = event => {
//     this.setState({
//       Username: event.target.value
//     });
//   };

//   phoneChange = event => {
//     this.setState({
//       Phone: event.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//     axios
//       .post("http://localhost:5000/resetauth", this.state)

//       .then(res => {
//         alert("login successfull");
//         console.log(res);
//         window.location = "/resetpwd";
//       })
//       .catch(err => {
//         // alert(err.response);
//         console.log(err.response.data.message);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Jumbotron>
//           <Container>
//             <Form onSubmit={this.handleSubmit}>
//               <FormGroup>
//                 <Label>Username</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   id="name"
//                   onChange={this.nameChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Phone Number</Label>
//                 <Input
//                   type="text"
//                   name="Phone"
//                   id="Phone"
//                   onChange={this.phoneChange}
//                 />
//               </FormGroup>

//               <Button>Reset Password</Button>
//             </Form>
//             <Link to="/">
//               <Button outline color="primary">
//                 {" "}
//                 Bact to Login
//               </Button>
//             </Link>
//           </Container>
//         </Jumbotron>
//       </div>
//     );
//   }
// }
