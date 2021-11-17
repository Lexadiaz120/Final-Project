import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service' 
import CloudService from '../../../services/cloud.service' 
import "./Signup.css"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      pwd: "", 
      email: "", 
      photo: ""
    }
    this.authService = new AuthService();
    this.cloudService = new CloudService();
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, pwd, email, photo } = this.state
    this.authService.signup(username, pwd , email, photo)
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err))
  } 

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("photo", e.target.files[0]);

    this.cloudService
      .handleUpload(uploadData)
      .then((response) => {
        console.log("response is: ", response);

        this.setState({ photo: response.data.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };


  render() {
    return (
     <div className="backblack"> 
        <div className="login-page">
          <Form className="formsignup" onSubmit={this.handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="black">Username</Form.Label>
            <Form.Control name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="black">Password</Form.Label>
            <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Password" />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="black">E-mail</Form.Label>
            <Form.Control name="email" value={this.state.email} onChange={this.handleInput} type="email" placeholder="Type your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label className="black">Photo</Form.Label>
            <Form.Control
              onChange={(e) => this.handleFileUpload(e)}
              type="file"
              placeholder="Photo"
            />
          </Form.Group>


          <Button  variant="btn btn-login" type="submit">
            Submit
          </Button>
        </Form>   
        </div>
      </div>
    )
  }
}

export default Signup